package no.difi.dc2017.norgeProfil.oauth2;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.oauth2.client.filter.OAuth2ClientAuthenticationProcessingFilter;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * @author erlend
 */
public class NorgeAuthenticationProcessingFilter extends OAuth2ClientAuthenticationProcessingFilter {

    public NorgeAuthenticationProcessingFilter(String defaultFilterProcessesUrl) {
        super(defaultFilterProcessesUrl);

        setAuthenticationSuccessHandler(new AuthenticationSuccessHandler() {
            private AuthenticationSuccessHandler defaultHandler = new SavedRequestAwareAuthenticationSuccessHandler();

            @Override
            public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
                if (request.getSession(true).getAttribute("location") != null) {
                    String location = (String) request.getSession().getAttribute("location");
                    request.getSession().removeAttribute("location");
                    response.sendRedirect(location);
                } else {
                    defaultHandler.onAuthenticationSuccess(request, response, authentication);
                }
            }
        });
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException, IOException, ServletException {
        if (request.getParameter("location") != null) {
            request.getSession(true).setAttribute("location", request.getParameter("location"));
        }

        return super.attemptAuthentication(request, response);
    }
}
