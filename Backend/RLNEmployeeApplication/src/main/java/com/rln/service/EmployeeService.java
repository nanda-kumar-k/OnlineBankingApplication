package com.rln.service;

import java.util.List;

import com.rln.model.Customer;
import com.rln.model.CustomerProfile;
import com.rln.model.Employee;
import com.rln.payload.response.JwtResponse;

public interface EmployeeService {
	
	
	
	public JwtResponse _authenticateEmployee(Employee employee);
	
	
	List<Customer> _allAccountRequest();
	
	CustomerProfile _getCustomerProfile(String username);
	
	boolean _customerVerification(String username);
	
	List<Customer> _getAllCustomers();
	
	
	
	

}
