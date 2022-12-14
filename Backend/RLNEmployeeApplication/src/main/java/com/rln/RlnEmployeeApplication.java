package com.rln;

import javax.annotation.Resource;


import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.client.RestTemplate;

import com.rln.service.FilesStorageService;

@SpringBootApplication
@ComponentScan(basePackages = "com.rln")
public class RlnEmployeeApplication implements CommandLineRunner {

	@Resource
	FilesStorageService storageService;
		
	public static void main(String[] args) {
		SpringApplication.run(RlnEmployeeApplication.class, args);
		
		System.out.println("RLN Employee Application Running...!!");
	}
	
	@Bean
	public RestTemplate restTemplate() {
		return new RestTemplate();
	}

	@Override
	public void run(String... args) throws Exception {
		storageService.deleteAll();
	    storageService.init();		
	}

}
