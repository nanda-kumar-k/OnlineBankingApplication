package com.rln.service;

import java.util.List;

import com.rln.model.Customer;
import com.rln.model.CustomerProfile;
import com.rln.model.Employee;
import com.rln.model.Manager;
import com.rln.payload.response.JwtResponse;

public interface ManagerService {
	

	
	public JwtResponse _authenticateManager(Manager manager);
	
	
	List<Customer> _allAccountRequest();
	
	CustomerProfile _getCustomerProfile(String username);
	
	boolean _customerVerification(String username);
	
	List<Customer> _getAllCustomers();
	
	
	boolean _addEmployee(Employee employee);
	
	List<Employee> _getAllEmployees();
	
	

}
