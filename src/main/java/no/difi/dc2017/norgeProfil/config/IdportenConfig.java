package no.difi.dc2017.norgeProfil.config;

import no.difi.dc2017.norgeProfil.domain.IdportenUser;
import no.difi.dc2017.norgeProfil.oauth2.NorgeAuthenticationProcessingFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.oauth2.resource.ResourceServerProperties;
import org.springframework.boot.autoconfigure.security.oauth2.resource.UserInfoTokenServices;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.client.OAuth2ClientContext;
import org.springframework.security.oauth2.client.OAuth2RestTemplate;
import org.springframework.security.oauth2.client.filter.OAuth2ClientAuthenticationProcessingFilter;
import org.springframework.security.oauth2.client.filter.OAuth2ClientContextFilter;
import org.springframework.security.oauth2.client.token.grant.code.AuthorizationCodeResourceDetails;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableOAuth2Client;

import javax.servlet.Filter;
import java.util.Collections;

/**
 * @author erlend
 */
@Configuration
@EnableOAuth2Client
public class IdportenConfig {

    static {
        System.setProperty("javax.net.ssl.trustStoreType", "Windows-ROOT");
    }

    @Autowired
    private OAuth2ClientContext oauth2ClientContext;

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

    @Bean
    public FilterRegistrationBean oauth2ClientFilterRegistration(OAuth2ClientContextFilter filter) {
        FilterRegistrationBean registration = new FilterRegistrationBean();
        registration.setFilter(filter);
        registration.setOrder(-100);
        return registration;
    }

    @Bean("idportenFilter")
    public Filter ssoFilter() {
        OAuth2ClientAuthenticationProcessingFilter idportenFilter = new NorgeAuthenticationProcessingFilter("/login/idporten");

        // Log inn user
        OAuth2RestTemplate idportenTemplate = new OAuth2RestTemplate(idporten(), oauth2ClientContext);
        idportenFilter.setRestTemplate(idportenTemplate);

        // Obtain user details from userInfo endpoint
        UserInfoTokenServices tokenServices = new UserInfoTokenServices(idportenResource().getUserInfoUri(), idporten().getClientId()); //TODO: Lag egen service som henter data fra OIDC
        tokenServices.setPrincipalExtractor(map -> new IdportenUser("Difi Camp 2017", "dc2017@example.com")); // Return user object
        tokenServices.setAuthoritiesExtractor(map -> Collections.singletonList(new SimpleGrantedAuthority("ROLE_DC"))); // Tildel rettigheter
        idportenFilter.setTokenServices(tokenServices);

        return idportenFilter;
    }
}
