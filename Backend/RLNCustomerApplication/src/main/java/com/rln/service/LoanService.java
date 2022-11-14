package com.rln.service;

import com.rln.model.EducationalLoan;
import com.rln.model.HomeLoan;
import com.rln.payload.response.ApiResponse;
import com.rln.payload.response.LoansResponse;

public interface LoanService {
	
	ApiResponse<String> _openNewHomeLoan(HomeLoan homeLoan, String token);
	
	ApiResponse<String> _openNewEducationaLoan(EducationalLoan educationalLoan, String token);
	
	LoansResponse _getAllLoans(String token);
	
	String _closeLoan(String loanid, String token);

}
