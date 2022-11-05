package com.rln.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rln.repository.LoanVerificationRepository;

@Service
public class LoanVerificationServiceImpl implements LoanVerificationService {
	
	@Autowired
	private LoanVerificationRepository loanVerificationRepository;

}
