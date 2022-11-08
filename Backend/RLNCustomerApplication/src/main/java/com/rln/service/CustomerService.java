package com.rln.service;

import com.rln.model.CustomerProfile;

public interface CustomerService {
	
	boolean _checkCustomer(String user);
	
	boolean _createRLNCustomer(CustomerProfile customerProfile);

}
