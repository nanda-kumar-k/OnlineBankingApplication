package com.rln;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.rln")
public class RlnBusinessApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(RlnBusinessApiApplication.class, args);
		
		System.out.println("RLN Business Api Application Running...!!");
	}

}
