package no.difi.dc2017.norgeProfil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.security.oauth2.client.OAuth2ClientContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.client.RestTemplate;

@Controller
public class HomeController {

    @RequestMapping(value = "/")
    public String index() {
        return ("index");
    }
    @RequestMapping("/norge")
    public String norge(){
        return ("norgeno");
    }
    @Autowired
    OAuth2ClientContext oauth2ClientContext;
    private final static String KRR_URI = "https://oidc-ver2.difi.no/kontaktinfo-oauth2-server/rest/v1/person";

    private String GLOBAL_URI = "http://localhost:4500";

    private final static String EVENT_BY_SNN = "/eventBySsn";
    private final static String USED_SERVICES = "/getUsedServices";
    private final static String RECENT_USER_ACTIVITY = "/getRecentUserActivity";
    private final static String RECENT_PUBLIC_ACTIVITY = "/getRecentPublicActivity";
    private final static String MOST_USED_AUTH_TYPES = "/getMostUsedAuthTypes";
    private final static String UNUSED_AUTH_TYPES = "/getUnusedAuthTypes";
    private final static String LATEST_EVENTS = "/getLatestEvents";
    private final static String GET_POSTBOKS = "/getPostBoks";
    private final static String GET_ALL_AUTH_TYPES = "/getAllAuthTypes";
//    private final static String GET_AUTH_TYPE_BY_ID = "/getAuthTypeById";


    @RequestMapping("/getKrrInfo")
    public HttpEntity getKrrInfo() {
        // read access token from principal
        String at = oauth2ClientContext.getAccessToken().toString();
//        String idt = oauth2ClientContext.getAccessToken().getAdditionalInformation().toString();
        //Make api request to krr endpoint with access token as Authorization http header using RestTemplate
        //Header:
        //Authorization: Bearer <access_token>
        //https://oidc-ver2.difi.no/kontaktinfo-oauth2-server/rest/v1/person
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer "+ at);
        HttpEntity<?> entity = new HttpEntity<>(headers);

        RestTemplate rt = new RestTemplate();
        HttpEntity<String> response = rt.exchange(
                KRR_URI,
                HttpMethod.GET,
                entity,
                String.class);
        // return content from krr
        return response;
    }

    @RequestMapping(USED_SERVICES)
    public HttpEntity usedServices() {
        return getEntity(USED_SERVICES);
    }

    @RequestMapping(GET_POSTBOKS)
    public HttpEntity getPostboks() {
        return getEntity(GET_POSTBOKS);
    }

    @RequestMapping(RECENT_USER_ACTIVITY)
    public HttpEntity recentUserActivity() {
        return getEntity(RECENT_USER_ACTIVITY);
    }
    @RequestMapping(RECENT_PUBLIC_ACTIVITY)
    public HttpEntity recentPublicActivity() {
        return getEntity(RECENT_PUBLIC_ACTIVITY);
    }

    @RequestMapping(MOST_USED_AUTH_TYPES)
    public HttpEntity mostUsedAuthTypes() {
        return getEntity(MOST_USED_AUTH_TYPES);
    }
    @RequestMapping(UNUSED_AUTH_TYPES)
    public HttpEntity usedAuthTypes() {
        return getEntity(UNUSED_AUTH_TYPES);
    }


    @RequestMapping(LATEST_EVENTS)
    public HttpEntity latestEvents() {
        return getEntity(LATEST_EVENTS);
    }

    @RequestMapping(EVENT_BY_SNN)
    public HttpEntity eventBySnn() {
        return getEntity(EVENT_BY_SNN);
    }

    @RequestMapping(GET_ALL_AUTH_TYPES)
    public HttpEntity getAllAuthTypes() {
        return getEntity(GET_ALL_AUTH_TYPES);
    }


    public HttpEntity getEntity(String url){
        String at = oauth2ClientContext.getAccessToken().toString();
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer "+ at);
        HttpEntity<?> entity = new HttpEntity<>(headers);
        RestTemplate rt = new RestTemplate();
        HttpEntity<String> response = rt.exchange(
                GLOBAL_URI + url,
                HttpMethod.GET,
                entity,
                String.class);
        return response;

    }







}
