package no.difi.dc2017.norgeProfil;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@SpringBootApplication
@EnableWebMvc
@Configuration
@EnableAutoConfiguration
public class NorgeProfilApplication {

	public static void main(String[] args) {
		SpringApplication.run(NorgeProfilApplication.class, args);
	}
}
