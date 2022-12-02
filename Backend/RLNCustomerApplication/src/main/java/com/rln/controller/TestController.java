package com.rln.controller;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rln.payload.response.ApiResponse;
import com.rln.service.CustomerService;



//@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/test")
public class TestController {
	
	
	@Autowired
	private CustomerService customerService;
	
	@GetMapping("/")
    public String empmanagerdemo()
    {
    	return "Customer Microservice";
    }
	
	
	@GetMapping("/checkcustomer/{username}")
	public ApiResponse<String> checkCustomer( @PathVariable( name = "username" ) String user ) {
		ApiResponse<String> res = new ApiResponse<>();
		
		if( customerService._checkCustomer(user) ) {
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
	
	@GetMapping("/test/{username}")
	public ResponseEntity<ApiResponse<String>> test( @PathVariable( name = "username" ) String user ) {
		ApiResponse<String> res = new ApiResponse<>();
		
		if( customerService._checkCustomer(user) ) {
			res.setStatusCode(100);
			res.setMessage("Username already exit...!!");
			res.setTimestamp(new Date());
		}
		else {
			res.setStatusCode(200);
			res.setMessage("Username not found...!!");
			res.setTimestamp(new Date());
		}
		
		return new ResponseEntity<>(res, HttpStatus.OK);
	}
	
	@GetMapping("/test1") 
	public ResponseEntity<String> test2(){
		return new ResponseEntity<>("okkk", HttpStatus.OK);
	}

}
