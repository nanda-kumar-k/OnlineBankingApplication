package com.rln.service;

import java.math.BigInteger;

import org.springframework.http.ResponseEntity;

import com.rln.model.Customer;
import com.rln.model.CustomerProfile;

public interface CustomerService {
	
	boolean _checkUsernameAvailability(String username);
	
	boolean _checkCustomer(String user);
	
	boolean _createRLNCustomer(CustomerProfile customerProfile);
	
	boolean _checkAccountNumber(BigInteger bigInteger);
	
	ResponseEntity<?> _authenticateCustomer(Customer customer);

}
