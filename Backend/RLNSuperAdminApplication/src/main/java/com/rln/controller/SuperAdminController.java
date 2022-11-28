package com.rln.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rln.service.SuperAdminService;



@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("/api/superadmin")
public class SuperAdminController {
	
	@Autowired
	private SuperAdminService adminService;
	
	@GetMapping("")
	public String test() {
		return "test done";
	}

}
