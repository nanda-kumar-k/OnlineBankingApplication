package com.rln.service;

import java.util.List;

import com.rln.model.Customer;
import com.rln.model.CustomerProfile;
import com.rln.model.Deposit;
import com.rln.model.SuperAdmin;
import com.rln.payload.response.JwtResponse;

public interface SuperAdminService {
	
	boolean _createSuperAdmin();
	
	public JwtResponse _authenticateSuperAdmin(SuperAdmin admin);
	
	
	SuperAdmin _GetSuperAdminFromToken ( String token );
	
	List<Customer> _allAccountRequest();
	
	CustomerProfile _getCustomerProfile(String username);
	
	boolean _customerVerification(String username);
	
	List<Customer> _getAllCustomers();
	
	

}
