package com.rln.service;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.rln.model.EducationalLoan;
import com.rln.model.HomeLoan;
import com.rln.model.LoanInterestPayment;
import com.rln.payload.response.ApiResponse;
import com.rln.payload.response.LoansResponse;
import com.rln.payload.response.SpecificLoanResponse;

public interface LoanService {
	
	
	LoansResponse _getCustomerLoans(String username);
	
	String _closeLoan(String loanid);
	
	String _loanPayment(LoanInterestPayment interestPayment, String token);
	
	List<LoanInterestPayment> _allLoanPayemnts(String token);
	
	
    SpecificLoanResponse _specificLoan(String loanid);

}
