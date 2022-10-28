package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.model.Customer;
import com.service.CustomerProfileService;
import com.service.CustomerService;

public class ClientController {
	
	@Autowired(required=true)
	private CustomerService customerService;
	
	@Autowired(required=true)
	private CustomerProfileService customerProfileService;
	
	@PostMapping("/addcustomer")
	public String addEmployee(@RequestBody  Customer customer)
	{
		customerService.addCustomer(customer);
//		customerProfileService.addCustomerProfile(null);
		return "Customer added";
	}
	
	@PostMapping("/")
	public String view() {
		return "hello";
	}

}
