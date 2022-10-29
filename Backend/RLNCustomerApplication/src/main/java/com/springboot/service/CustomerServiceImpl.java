package com.springboot.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.model.Customer;
import com.springboot.repository.CustomerRepository;

@Service
public class CustomerServiceImpl implements CustomerService  {
	
	 @Autowired
	 private CustomerRepository customerRepository;

	@Override
	public String addCustomer(Customer customer) {
		customerRepository.save(customer);
		return "Customer Record Inserted Successfully";
	}

	

}
