package com.rln.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/superadmin")
public class SuperAdminController {
	
	@GetMapping("/")
    public String empmanagerdemo()
    {
    	return "super admin Microservice";
    }

}
