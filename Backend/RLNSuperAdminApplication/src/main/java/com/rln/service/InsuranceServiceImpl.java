package com.rln.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rln.repository.InsuranceInterestPayemntRepository;
import com.rln.repository.InsuranceRepository;

@Service
public class InsuranceServiceImpl implements InsuranceService {
	
	@Autowired
	private InsuranceRepository insuranceRepository;
	
	@Autowired 
	private InsuranceInterestPayemntRepository insuranceInterestPayemntRepository;

}
