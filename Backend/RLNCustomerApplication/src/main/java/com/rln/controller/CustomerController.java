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
import com.rln.payload.response.JwtResponse;
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
		
		ApiResponse<String> res = new ApiResponse<>();
		res.setTimestamp(new Date());
		System.out.println("nandaaaaa");
		if ( customerService._createRLNCustomer(customerProfile) ) {
			
			res.setStatusCode(201);
			res.setMessage("Account Created successfully...!!!");
		}
		else {
			res.setStatusCode(400);
			res.setMessage(" Account Cannot created for given data...!!! ");
		}
		
		return res;
	}
	
	
	@PostMapping("/authenticaterlncustomer")
	public JwtResponse authenticateCustomer(@RequestBody Customer customer){
		
		return customerService._authenticateCustomer(customer);
	}
	
	
	@GetMapping("/checkbalance") 
	@PreAuthorize("isAuthenticated()")
	public ApiResponse<Customer> __checkCustomerBalance(@RequestHeader("Authorization") String token) {
		
		ApiResponse<Customer> res = new ApiResponse<>();
		res.setTimestamp(new Date());
		
		Customer customer = customerService._checkCustomerBalance(token);
		
		Customer cres = new Customer();
		cres.setAccountNumber(customer.getAccountNumber());
		cres.setAccountType(customer.getAccountType());
		cres.setBalance(customer.getBalance());
		cres.setUsername(customer.getUsername());
		
		res.setData(cres);
		res.setStatusCode(200);
		res.setMessage("Data found");
		
		return res;
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
