package no.difi.dc2017.norgeProfil;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import javax.xml.bind.JAXBException;
import javax.xml.transform.TransformerException;

@SpringBootApplication
public class NorgeProfilApplication {
    public static void main(String[] args) throws TransformerException, JAXBException {
        SpringApplication.run(NorgeProfilApplication.class, args);
    }
}