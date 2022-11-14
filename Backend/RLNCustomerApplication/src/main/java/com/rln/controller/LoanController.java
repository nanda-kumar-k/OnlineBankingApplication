package com.rln.controller;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rln.model.EducationalLoan;
import com.rln.model.HomeLoan;
import com.rln.payload.response.ApiResponse;
import com.rln.payload.response.LoansResponse;
import com.rln.service.LoanService;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("/api/customer/loan")
public class LoanController {
	
	@Autowired
	public LoanService loanService;
	
	
	
	@PostMapping("/opennewhomeloan")
	@PreAuthorize("isAuthenticated()")
	public ApiResponse<String> __openNewHomeLoan(
			@RequestBody HomeLoan homeLoan, @RequestHeader("Authorization") String token) {
		
		return loanService._openNewHomeLoan(homeLoan, token);
		
	}
	
	
	@PostMapping("/openeducationalloan")
	@PreAuthorize("isAuthenticated()")
	public ApiResponse<String> __openEdicationalLoan(
			@RequestBody EducationalLoan educationalLoan, @RequestHeader("Authorization") String token ) {
		
		return loanService._openNewEducationaLoan(educationalLoan, token);
		
	}
	
	
	@GetMapping("/getallloans")
	@PreAuthorize("isAuthenticated()")
	public ApiResponse<LoansResponse> __getAllLoans(@RequestHeader("Authorization") String token) {
		ApiResponse<LoansResponse> res = new ApiResponse<>();
		res.setTimestamp(new Date());
		
		LoansResponse checkRes = loanService._getAllLoans(token);
		
		if( checkRes.getEducationalLoans() != null || checkRes.getHomeloans() != null ) {
			
			res.setData(checkRes);
			res.setMessage("Loan Founded...!!");
			res.setStatusCode(200);
		}
		else {
			
			res.setMessage("No Loans Founded...!!");
			res.setStatusCode(204);
		}
		
		return res;
	}
	
	
	@GetMapping("/closehomeloan/{loanid}")
	@PreAuthorize("isAuthenticated()")
	public ApiResponse<String> __closeHomeLoan(
			@PathVariable("loanid") String loanid , @RequestHeader("Authorization") String token ) {
		
		ApiResponse<String> res = new ApiResponse<>();
		res.setTimestamp(new Date());
		
		return res;
	}

}
