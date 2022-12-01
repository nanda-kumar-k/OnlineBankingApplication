package com.rln.service;

import java.util.List;

import com.rln.model.Customer;
import com.rln.model.CustomerProfile;
import com.rln.model.Deposit;
import com.rln.model.Employee;
import com.rln.model.Manager;
import com.rln.model.SuperAdmin;
import com.rln.payload.response.JwtResponse;

public interface EmployeeService {
	
	boolean _createSuperAdmin();
	
	public JwtResponse _authenticateEmployee(Employee employee);
	
	
	SuperAdmin _GetSuperAdminFromToken ( String token );
	
	List<Customer> _allAccountRequest();
	
	CustomerProfile _getCustomerProfile(String username);
	
	boolean _customerVerification(String username);
	
	List<Customer> _getAllCustomers();
	
	
	boolean _addManager(Manager manager);
	
	List<Manager> _getAllManagers();
	
	boolean _addEmployee(Employee employee);
	
	List<Employee> _getAllEmployees();
	
	

}
