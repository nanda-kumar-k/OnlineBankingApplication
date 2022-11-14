package com.rln.controller;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rln.model.HomeLoan;
import com.rln.payload.response.ApiResponse;
import com.rln.service.LoanService;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("/api/customer/loan")
public class LoanController {
	
	@Autowired
	private LoanService loanService;
	
	
	
	@PostMapping("/opennewhomeloan")
	public ApiResponse<String> __openNewHomeLoan(
			@RequestBody HomeLoan homeLoan, @RequestHeader("Authorization") String token) {
		
		ApiResponse<String> res = new ApiResponse<>();
		res.setTimestamp(new Date());
		
		return res;
	}

}
