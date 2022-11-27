package com.rln.controller;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rln.model.BusinessAPI;
import com.rln.payload.response.ApiResponse;
import com.rln.service.BusinessService;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("/api/customer/businessapi")
public class BusinessApiController {
	
	@Autowired
	private BusinessService  businessService;
	
	@GetMapping("/createapikey") 
	@PreAuthorize("isAuthenticated()")
	public ApiResponse<String> __apiKeyCreation(@RequestHeader("Authorization") String token) {
		
		ApiResponse<String> res = new ApiResponse<>();
		res.setTimestamp(new Date());
		
		if  ( businessService._apiKeyCreation(token) ) {
			
			res.setStatusCode(200);
			res.setMessage("Busniess Api Key created...!!");
		
		}
		else  {
			
			res.setStatusCode(401);
			res.setMessage("You are not authorize to create business api...!! please contact near RLN Bank...!!");
			
		}
		
		return res;
		
	}
	
	
	@GetMapping("/getapikey") 
	@PreAuthorize("isAuthenticated()")
	public ApiResponse<BusinessAPI> __apiKeyRequest(@RequestHeader("Authorization") String token) {
		
		ApiResponse<BusinessAPI> res = new ApiResponse<>();
		res.setTimestamp(new Date());
		
		BusinessAPI chekGet = businessService._apiKeyRequest(token);
		
		if ( chekGet != null ) {
			
			res.setData(chekGet);
			res.setMessage("Data found...!!");
			res.setStatusCode(200);
			
		}
		else {
			
			res.setStatusCode(403);
			res.setMessage("Not Founded the business api key...!!");
			
		}
		
		return res;
		
	}

}
