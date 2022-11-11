package com.rln.controller;



import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.rln.model.Customer;
import com.rln.model.CustomerProfile;
import com.rln.payload.response.ApiResponse;
import com.rln.security.jwt.JwtUtils;
import com.rln.service.CustomerService;

import io.micrometer.core.lang.Nullable;


@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("/api/customer")
public class CustomerController {
	

	@Autowired
	public CustomerService customerService;
		
	
	@GetMapping("/checkuser")
	public ApiResponse<String> __checkUsernameAvailability(@RequestParam String username) {
		
		ApiResponse<String> res = new ApiResponse<>();
		res.setTimestamp(new Date());
		
		if ( customerService._checkUsernameAvailability(username) ) {
			
			res.setStatusCode(100);
			res.setMessage("Username Not found...!!");
			
		}
		else {
			
			res.setStatusCode(101);
			res.setMessage("Username Already Exit...!! Try with alternate username...!!!");
		}
		
		return res;
	}
	
	@PostMapping("/createrlncustomer")
	public ApiResponse<String> __createRLNCustomer(@RequestBody CustomerProfile customerProfile) {
		
		customerService._createRLNCustomer(customerProfile);
		return null;
	}
	
	
	@PostMapping("/authenticaterlncustomer")
	public ResponseEntity<?> authenticateCustomer(@RequestBody Customer customer){
		
		return customerService._authenticateCustomer(customer);
	}
	
	
	//permitAll()
//	@PreAuthorize("hasAuthority('Admin')")
	
	@GetMapping("/check")
//	@PreAuthorize("hasRole('TYPE_SAVINGS')")
	@PreAuthorize("isAuthenticated()")
	public String Check(@RequestHeader("Authorization") String token) {
		System.out.println(token.substring(7));
		JwtUtils jwtUtils = new JwtUtils();
		System.out.println(jwtUtils.getUserNameFromJwtToken(token.substring(7)));
		
		return token.substring(7);
	}

}
