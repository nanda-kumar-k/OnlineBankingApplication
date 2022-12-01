package com.rln.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rln.model.BusinessAPI;
import com.rln.model.BusinessTransaction;
import com.rln.payload.response.ApiResponse;
import com.rln.service.BusinessService;

@CrossOrigin(origins = "http://localhost:3010", maxAge = 3600)
@RestController
@RequestMapping("/api/employee/businessapi")
public class BusinessApiController {
	
	@Autowired
	private BusinessService  businessService;
	
	@GetMapping("/getallbusinessapicustomers")
	@PreAuthorize("isAuthenticated()")
	public ApiResponse<List<BusinessAPI>> __getAllBusinessApiCustomers() {
		ApiResponse<List<BusinessAPI>> res = new ApiResponse<>();
		res.setTimestamp(new Date());
		
		List<BusinessAPI> getCheck = businessService._getAllBusinessApiCustomers();
		
		if ( getCheck != null ) {
			
			res.setData(getCheck);
			res.setStatusCode(200);
		}
		
		else {
			
			res.setStatusCode(400);
			res.setMessage("Data not found...!!");
		}
		
		return res;
	}
	
	
	@GetMapping("/getallbusinessapitransactions")
	@PreAuthorize("isAuthenticated()")
	public ApiResponse<List<BusinessTransaction>> __getAllBusinessApiTransactions() {
		ApiResponse<List<BusinessTransaction>> res = new ApiResponse<>();
		res.setTimestamp(new Date());
		
		List<BusinessTransaction> getCheck = businessService.getAllBusinessApiTransactions();
		
		if ( getCheck != null ) {
			
			res.setData(getCheck);
			res.setStatusCode(200);
		}
		
		else {
			
			res.setStatusCode(400);
			res.setMessage("Data not found...!!");
		}
		
		return res;
	}
	
	
	
	@GetMapping("/getbusinessapicustomertransactions/{username}")
	@PreAuthorize("isAuthenticated()")
	public ApiResponse<List<BusinessTransaction>> __getCustomerBusinessApiTractions(@PathVariable("username") String username) {
		
		ApiResponse<List<BusinessTransaction>> res = new ApiResponse<>();
		res.setTimestamp(new Date());
		
		List<BusinessTransaction> getCheck = businessService._getCustomerBusinessApiTractions(username);
		
		if  ( getCheck.isEmpty() ) {
			
			res.setStatusCode(400);
			res.setMessage("No Transactions Found...!!");
			
		}
		else {
			
			res.setData(getCheck);
			res.setStatusCode(200);
			res.setMessage("Data Found...!!");
		}
		
		return res;
	}
}
