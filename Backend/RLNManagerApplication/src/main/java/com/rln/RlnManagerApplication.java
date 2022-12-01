package com.rln;

import javax.annotation.Resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.client.RestTemplate;

import com.rln.model.SuperAdmin;
import com.rln.repository.SuperAdminRepository;
import com.rln.service.FilesStorageService;

@SpringBootApplication
@ComponentScan(basePackages = "com.rln")
public class RlnManagerApplication implements CommandLineRunner {

	@Resource
	FilesStorageService storageService;
		
	public static void main(String[] args) {
		SpringApplication.run(RlnManagerApplication.class, args);
		
		System.out.println("RLN Manager Application Running...!!");
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
