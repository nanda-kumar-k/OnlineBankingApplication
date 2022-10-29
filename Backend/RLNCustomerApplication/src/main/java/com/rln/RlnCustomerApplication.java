package com.rln;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.rln")
public class RlnCustomerApplication {

	public static void main(String[] args) {
		SpringApplication.run(RlnCustomerApplication.class, args);
		System.out.println("RLN Customer Application Runninng...!!!");
	}

}
