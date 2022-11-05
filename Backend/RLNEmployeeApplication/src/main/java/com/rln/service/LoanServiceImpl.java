package com.rln.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rln.repository.EducationalLoanInterestPaymentRepository;
import com.rln.repository.EducationalRepository;
import com.rln.repository.HomeLoanInterestPaymentRepository;
import com.rln.repository.HomeLoanRepository;

@Service
public class LoanServiceImpl implements LoanService {
	
	@Autowired
	private HomeLoanRepository homeLoanRepository;
	
	@Autowired
	private HomeLoanInterestPaymentRepository homeLoanInterestPaymentRepository;
	
	
	@Autowired
	private EducationalRepository educationalRepository;
	
	@Autowired
	private EducationalLoanInterestPaymentRepository educationalLoanInterestPaymentRepository;

}
