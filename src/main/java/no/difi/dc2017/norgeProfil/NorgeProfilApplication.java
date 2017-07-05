package no.difi.dc2017.norgeProfil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.oauth2.resource.ResourceServerProperties;
import org.springframework.boot.autoconfigure.security.oauth2.resource.UserInfoTokenServices;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.oauth2.client.OAuth2ClientContext;
import org.springframework.security.oauth2.client.OAuth2RestTemplate;
import org.springframework.security.oauth2.client.filter.OAuth2ClientAuthenticationProcessingFilter;
import org.springframework.security.oauth2.client.filter.OAuth2ClientContextFilter;
import org.springframework.security.oauth2.client.token.grant.code.AuthorizationCodeResourceDetails;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableOAuth2Client;
import org.springframework.security.web.authentication.LoginUrlAuthenticationEntryPoint;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.springframework.security.web.csrf.CookieCsrfTokenRepository;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.Filter;
import java.security.Principal;
import java.util.Arrays;

@SpringBootApplication
@RestController
@EnableOAuth2Client
public class NorgeProfilApplication extends WebSecurityConfigurerAdapter {

	@Autowired
	OAuth2ClientContext oauth2ClientContext;

	@RequestMapping("/user")
	public Principal user(Principal principal) {
		return principal;
	}


	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http
				.antMatcher("/**").authorizeRequests()
				.antMatchers("/", "/login**", "/webjars/**", "/built/**", "/img/**", "/styles/**").permitAll()
				.anyRequest().authenticated()
				.and()
				.exceptionHandling().authenticationEntryPoint(new LoginUrlAuthenticationEntryPoint("/"))
				.and()
				.logout().logoutRequestMatcher(new AntPathRequestMatcher("/logout")).logoutSuccessUrl("/").permitAll()
				.and()
				.csrf().csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
				.and()
				.addFilterBefore(ssoFilter(), BasicAuthenticationFilter.class);
	}

	public static void main(String[] args) {
		System.setProperty("javax.net.ssl.trustStoreType", "Windows-ROOT");
		SpringApplication.run(NorgeProfilApplication.class, args);
	}

	@Bean
	public FilterRegistrationBean oauth2ClientFilterRegistration(OAuth2ClientContextFilter filter) {
		FilterRegistrationBean registration = new FilterRegistrationBean();
		registration.setFilter(filter);
		registration.setOrder(-100);
		return registration;
	}


	private Filter ssoFilter() {
		OAuth2ClientAuthenticationProcessingFilter idportenFilter =
				new OAuth2ClientAuthenticationProcessingFilter("/login/idporten");

		// Log inn user
		OAuth2RestTemplate idportenTemplate = new OAuth2RestTemplate(idporten(), oauth2ClientContext);
		idportenFilter.setRestTemplate(idportenTemplate);

		// Obtain user details from userInfo endpoint
		OAuth2RestTemplate idportenResourceTemplate = new OAuth2RestTemplate(idporten(), oauth2ClientContext);
		UserInfoTokenServices tokenServices = new UserInfoTokenServices(idportenResource().getUserInfoUri(), idporten().getClientId()); //TODO: Lag egen service som henter data fra OIDC
		tokenServices.setPrincipalExtractor(map -> new IDPortenUserDetails("Difi Camp 2017", "dc2017@example.com")); // Return user object
		tokenServices.setAuthoritiesExtractor(map -> Arrays.asList(new SimpleGrantedAuthority("ROLE_DC"))); // Tildel rettigheter
		//tokenServices.setRestTemplate(idportenTemplate);
		idportenFilter.setTokenServices(tokenServices);
		return idportenFilter;
	}

	@Bean
	@ConfigurationProperties("idporten.client")
	public AuthorizationCodeResourceDetails idporten() {
		return new AuthorizationCodeResourceDetails();
	}

	@Bean
	@ConfigurationProperties("idporten.resource")
	public ResourceServerProperties idportenResource() {
		return new ResourceServerProperties();
	}

	public class IDPortenUserDetails {
		private String name;
		private String email;

		public IDPortenUserDetails(String name, String email) {
			this.name = name;
			this.email = email;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public String getEmail() {
			return email;
		}

		public void setEmail(String email) {
			this.email = email;
		}
	}

}