package com.rln.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/manager")
public class ManagerController {
	
	@GetMapping("/")
    public String empmanagerdemo()
    {
    	return "Manager Microservice";
    }

}
