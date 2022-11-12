package com.rln.service;



import org.springframework.http.ResponseEntity;

import com.rln.model.Customer;
import com.rln.model.CustomerProfile;
import com.rln.payload.response.JwtResponse;

public interface CustomerService {
	
	String _GetUsernameFromToken(String token);
	
	boolean _checkUsernameAvailability(String token);
	
	boolean _checkCustomer(String user);
	
	boolean _createRLNCustomer(CustomerProfile customerProfile);
	
	boolean _checkAccountNumber(String bigInteger);
	
	JwtResponse _authenticateCustomer(Customer customer);
	
	Customer _checkCustomerBalance(String username);

}
