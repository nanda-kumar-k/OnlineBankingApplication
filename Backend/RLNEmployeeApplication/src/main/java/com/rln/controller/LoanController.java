package com.rln.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.rln.model.EducationalLoan;
import com.rln.model.HomeLoan;
import com.rln.model.LoanInterestPayment;
import com.rln.payload.response.ApiResponse;
import com.rln.payload.response.LoansResponse;
import com.rln.payload.response.SpecificLoanResponse;
import com.rln.service.FilesStorageService;
import com.rln.service.LoanService;

@CrossOrigin(origins = "http://localhost:3010", maxAge = 3600)
@RestController
@RequestMapping("/api/employee/loans")
public class LoanController {
	
	@Autowired
	public LoanService loanService;
	
	@Autowired
	public FilesStorageService storageService;
	
	
	
	@GetMapping("/customerloans/{username}")
	@PreAuthorize("isAuthenticated()")
	public ApiResponse<LoansResponse> __getAllLoans(@PathVariable("username") String username) {
		ApiResponse<LoansResponse> res = new ApiResponse<>();
		res.setTimestamp(new Date());
		
		LoansResponse checkRes = loanService._getCustomerLoans(username);
		
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
	
	@GetMapping("/specificloan/{loanid}")
	@PreAuthorize("isAuthenticated()")
	public ApiResponse<SpecificLoanResponse> __specificLoan(@PathVariable("loanid") String loanid){
		
		ApiResponse<SpecificLoanResponse> res = new ApiResponse<>();
		res.setTimestamp(new Date());
		SpecificLoanResponse check = loanService._specificLoan(loanid);
		
		if ( check != null ) {
			
			res.setData(check);
			res.setMessage("Data found");
			res.setStatusCode(200);
			
		}
		else {
			
			res.setMessage("No Loans Founded...!!");
			res.setStatusCode(204);
		}
		
		return res;
	}
	
	
	@GetMapping("/specificloanpayments/{loanid}")
	@PreAuthorize("isAuthenticated()")
	public ApiResponse<List<LoanInterestPayment>> __specificLoanPayments( @PathVariable("loanid") String loanid ) {
		ApiResponse<List<LoanInterestPayment>> res = new ApiResponse<>();
		res.setTimestamp(new Date());
		
		List<LoanInterestPayment> getCheck = loanService._specificLoanPayments(loanid);
		
		if ( getCheck.isEmpty() ) {
			
			res.setMessage("No Loan Payments Found...!!");
			res.setStatusCode(400);
			
		}
		else {
			
			res.setData(getCheck);
			res.setStatusCode(200);
			
		}
		
		return res;
	}
	
	@GetMapping("/alleducationalloans")
	@PreAuthorize("isAuthenticated()")
	public ApiResponse<List<EducationalLoan>> __allEducationalLoans() {
		
		ApiResponse<List<EducationalLoan>> res = new ApiResponse<>();
		res.setTimestamp(new Date());
		
		List<EducationalLoan> checkRes = loanService._AllEducationalLoans();
		
		if ( checkRes.isEmpty() ) {
			
			res.setMessage("No loan payments Found.!!!");
			res.setStatusCode(400);
		}
		else {
			
			res.setData(checkRes);
			res.setMessage("Data Found...!!");
			res.setStatusCode(200);
		}
		
		return res;
	}
	
	@GetMapping("/allhomeloans")
	@PreAuthorize("isAuthenticated()")
	public ApiResponse<List<HomeLoan>> __allHomeLoans() {
		
		ApiResponse<List<HomeLoan>> res = new ApiResponse<>();
		res.setTimestamp(new Date());
		
		List<HomeLoan> checkRes = loanService._AllHomeLoans();
		
		if ( checkRes.isEmpty() ) {
			
			res.setMessage("No loan payments Found.!!!");
			res.setStatusCode(400);
		}
		else {
			
			res.setData(checkRes);
			res.setMessage("Data Found...!!");
			res.setStatusCode(200);
		}
		
		return res;
	}
		
	@GetMapping("/allloanpayments")
	@PreAuthorize("isAuthenticated()")
	public ApiResponse<List<LoanInterestPayment>> __allLoanPayments() {
		
		ApiResponse<List<LoanInterestPayment>> res = new ApiResponse<>();
		res.setTimestamp(new Date());
		
		List<LoanInterestPayment> checkRes = loanService._allLoanPayemnts();
		
		if ( checkRes.isEmpty() ) {
			
			res.setMessage("No loan payments Found.!!!");
			res.setStatusCode(204);
		}
		else {
			
			res.setData(checkRes);
			res.setMessage("Data Found...!!");
			res.setStatusCode(200);
		}
		
		return res;
	}
	
	
	@GetMapping("/loansrequest")
	@PreAuthorize("isAuthenticated()")
	public ApiResponse<LoansResponse> __loanRequest() {
		ApiResponse<LoansResponse> res = new ApiResponse<>();
		res.setTimestamp(new Date());
		
		LoansResponse checkRes = loanService._loansRequest();
		
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
	
	@GetMapping("/loanverification/{loanid}")
	@PreAuthorize("isAuthenticated()")
	public ApiResponse<String> _loanVerification(@PathVariable("loanid") String loanid) {
		
		ApiResponse<String> res = new ApiResponse<>();
		res.setTimestamp(new Date());
		
		if ( loanService._loanVerification(loanid) ) {
			
			res.setStatusCode(200);
			res.setMessage("Loan Verification Successfull...!");
			
		}
		else {
			
			res.setStatusCode(400);
			res.setMessage("Loan Verification failed...!!");
		}
		
		return res;
		
	}
	

}
