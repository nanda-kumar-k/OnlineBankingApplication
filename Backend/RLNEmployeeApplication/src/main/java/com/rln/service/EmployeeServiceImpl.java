package com.rln.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.rln.model.Customer;
import com.rln.model.CustomerProfile;
import com.rln.model.Employee;
import com.rln.payload.response.JwtResponse;
import com.rln.repository.CustomerProfileRepository;
import com.rln.repository.CustomerRepository;
import com.rln.security.services.UserDetailsImpl;


@Service
public class EmployeeServiceImpl implements EmployeeService  {
		
	@Autowired
	private com.rln.security.jwt.JwtUtils jwtUtils;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	
	@Autowired
	private CustomerRepository customerRepository;
	
	@Autowired
	private CustomerProfileRepository customerProfileRepository;
	
	
	@Override
	public JwtResponse _authenticateEmployee(Employee employee) {
//		System.out.println(admin.getUsername());
//		System.out.println(admin.getPassword());
		Authentication authentication = authenticationManager.authenticate(
		        new UsernamePasswordAuthenticationToken(employee.getUsername(), employee.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication);
		UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
		    
		return new JwtResponse(jwt, 
		                         userDetails.getUsername()
		                         
		                         );
	}

	
	
	@Override
	public List<Customer> _allAccountRequest() {
		
		List<Customer> res = customerRepository.findByVerificationStatusFalse();
		
		return res;
	}

	@Override
	public CustomerProfile _getCustomerProfile(String username) {
		
		Customer customer = customerRepository.findByUsername(username).get();
		
		if ( customer != null ) {
			
			CustomerProfile customerProfile = customerProfileRepository.findByCustomerId(
					customer.getCustomer_id());
			
			if ( customerProfile != null) {
				
				return customerProfile;
			}
			
		}
		
		return null;
	}

	@Override
	public boolean _customerVerification(String username) {
		
		Customer customer = customerRepository.findByUsername(username).get();
		
		if ( customer != null ) {
			
			customer.setVerificationStatus(true);
			customer.setBalance(30000);
			customerRepository.save(customer);
			
			return true;

		}
		
		return false;
	}

	@Override
	public List<Customer> _getAllCustomers() {
		
		List<Customer> res = (List<Customer>) customerRepository.findAll();
		
		return res;
	}
	
}
