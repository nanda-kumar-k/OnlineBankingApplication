package com.rln.service;



import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.multipart.MultipartFile;

import com.rln.model.Customer;
import com.rln.model.CustomerProfile;
import com.rln.model.RLNServiceRating;
import com.rln.payload.response.JwtResponse;

public interface CustomerService {
	
	String _GetUsernameFromToken(String token);
	
	boolean _checkUsernameAvailability(String token);
	
	boolean _checkCustomer(String user);
	
	boolean _createRLNCustomer(CustomerProfile customerProfile);
	
	boolean _checkAccountNumber(String bigInteger);
	
	JwtResponse _authenticateCustomer(Customer customer);
	
	Customer _checkCustomerBalance(String token);
	
	Optional<Customer> _getCustomerDetailsByAccountNumber(String username);
	
	boolean _createOrUpdateCustomer(Customer customer);
	
	String _uploadCustomerPhoto(MultipartFile file, String username);
	
	CustomerProfile _getCustomerProfile(String token);
	
	boolean _updateCustomerProfile(CustomerProfile customerProfile, String token);
	
	boolean _rating(RLNServiceRating  serviceRating);

}
