package com.rln.service;



import org.springframework.http.ResponseEntity;

import com.rln.model.Customer;
import com.rln.model.CustomerProfile;

public interface CustomerService {
	
	boolean _checkUsernameAvailability(String username);
	
	boolean _checkCustomer(String user);
	
	boolean _createRLNCustomer(CustomerProfile customerProfile);
	
	boolean _checkAccountNumber(String bigInteger);
	
	ResponseEntity<?> _authenticateCustomer(Customer customer);

}
