package com.rln.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rln.repository.DepositRepository;

@Service
public class DepositServiceImpl implements DepositService {
	
	@Autowired
	private DepositRepository depositRepository;
}
