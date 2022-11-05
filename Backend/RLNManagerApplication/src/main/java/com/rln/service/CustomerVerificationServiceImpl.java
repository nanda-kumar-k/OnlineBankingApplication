package com.rln.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rln.repository.CustomerVerificationRepository;

@Service
public class CustomerVerificationServiceImpl implements CustomerVerificationService {
	
	@Autowired
	private CustomerVerificationRepository customerVerificationRepository;

}
