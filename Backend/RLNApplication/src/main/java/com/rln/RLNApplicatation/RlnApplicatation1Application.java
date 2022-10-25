package com.rln.RLNApplicatation;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages ="com.rln.RLN.Application")
public class RlnApplicatation1Application {

	public static void main(String[] args) {
		SpringApplication.run(RlnApplicatation1Application.class, args);
		System.out.println("Spring Boot Applicataion");
	}

}
