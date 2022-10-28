package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.model.Customer;
import com.respository.CustomerRepository;

@Service
public class CustomerServiceImpl implements CustomerService  {
	
	 @Autowired(required=true)
	 private CustomerRepository customerRepository;

	@Override
	public String addCustomer(Customer customer) {
		customerRepository.save(customer);
		return "Customer Record Inserted Successfully";
	}

	

}
