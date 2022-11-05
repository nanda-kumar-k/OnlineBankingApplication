package com.rln.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rln.repository.RLNBankDetailsRepository;

@Service
public class RLNBankDetailsServiceImpl implements RLNBankDetailsService {
	
	@Autowired
	private RLNBankDetailsRepository bankDetailsRepository;

}
