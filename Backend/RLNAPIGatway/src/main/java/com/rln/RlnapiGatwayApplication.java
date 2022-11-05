package com.rln;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
public class RlnapiGatwayApplication {

	public static void main(String[] args) {
		SpringApplication.run(RlnapiGatwayApplication.class, args);
		System.out.println("RLN API Gatway Server Running...!!");
	}

}
