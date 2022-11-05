package com.rln;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
@ComponentScan(basePackages = "com.rln")
public class RlnManagerApplication {

	public static void main(String[] args) {
		SpringApplication.run(RlnManagerApplication.class, args);
		System.out.println("RLN Manager Applicaton Running...!!");
	}
	
	@Bean
	public RestTemplate restTemplate() {
		return new RestTemplate();
	}

}
