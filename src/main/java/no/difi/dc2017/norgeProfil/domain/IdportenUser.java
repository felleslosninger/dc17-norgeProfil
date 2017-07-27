package no.difi.dc2017.norgeProfil.domain;

/**
 * @author erlend
 */
public class IdportenUser {

    private String name;

    private String email;

    public IdportenUser(String name, String email) {
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
