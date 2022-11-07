package com.rln.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rln.apimessages.ApiResponse;
import com.rln.model.Customer;
import com.rln.repository.CustomerProfileRepository;
import com.rln.repository.CustomerRepository;

@Service
public class CustomerServiceImpl implements CustomerService {
	
	@Autowired
	private CustomerRepository customerRepository;
	
	@Autowired
	private CustomerProfileRepository customerProfileRepository;
	
	
	@Override
	public boolean checkCustomer(String user) {
		
		Optional<Customer> check = customerRepository.findByUsername(user);
		
		if (check != null) {
			return true;
		}
		
		return false;
	}

}
