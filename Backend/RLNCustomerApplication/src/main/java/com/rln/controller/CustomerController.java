package com.rln.controller;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rln.apimessages.ApiResponse;
import com.rln.service.CustomerService;

@RestController
@RequestMapping("/api/customer")
public class CustomerController {
	
	@Autowired
	private CustomerService customerService;
	
	@GetMapping("/")
    public String empmanagerdemo()
    {
    	return "Customer Microservice";
    }
	
	
	@GetMapping("/checkcustomer/{username}")
	public ApiResponse<String> checkCustomer( @PathVariable String user ) {
		ApiResponse<String> res = new ApiResponse<>();
		
		if( customerService.checkCustomer(user) ) {
			res.setStatusCode(100);
			res.setMessage("Username already exit...!!");
			res.setTimestamp(new Date());
		}
		else {
			res.setStatusCode(200);
			res.setMessage("Username not found...!!");
			res.setTimestamp(new Date());
		}
		
		return res;

	}
	

}
