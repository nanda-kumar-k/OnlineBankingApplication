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
	
	ApiResponse<String> _openNewHomeLoan(HomeLoan homeLoan, String token);
	
	ApiResponse<String> _openNewEducationaLoan(EducationalLoan educationalLoan, String token);
	
	LoansResponse _getAllLoans(String token);
	
	String _closeLoan(String loanid);
	
	String _loanPayment(LoanInterestPayment interestPayment, String token);
	
	List<LoanInterestPayment> _allLoanPayemnts(String token);
	
	String _uploadLoanDocuments(MultipartFile file, String loanid);
	
    SpecificLoanResponse _specificLoan(String loanid);

}
