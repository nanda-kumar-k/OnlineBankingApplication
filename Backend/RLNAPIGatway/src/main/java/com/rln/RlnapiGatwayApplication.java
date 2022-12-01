package com.rln;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.reactive.config.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
//import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
//@CrossOrigin(origins = "http://localhost:3000", maxAge = 36000)
public class RlnapiGatwayApplication {

	public static void main(String[] args) {
		SpringApplication.run(RlnapiGatwayApplication.class, args);
		System.out.println("RLN API Gatway Server Running...!!");
	}

}
