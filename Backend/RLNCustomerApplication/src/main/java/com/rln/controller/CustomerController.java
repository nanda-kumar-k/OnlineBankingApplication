package com.rln.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rln.model.Customer;
import com.rln.service.CustomerService;


@RestController
public class CustomerController {
	
	
	@Autowired
	private CustomerService customerService;
	
	@PostMapping("/addcustomer")
	public String addEmployee(@RequestBody  Customer customer)
	{
		customerService.addCustomer(customer);
//		customerProfileService.addCustomerProfile(null);
		return "Customer added";
	}
	
	@RequestMapping("/")
	public String view() {
		return "hello";
	}
	
	
}
