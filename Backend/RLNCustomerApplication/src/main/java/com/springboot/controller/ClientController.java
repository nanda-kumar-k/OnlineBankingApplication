package com.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.model.Customer;

import com.springboot.service.CustomerService;
@RestController
public class ClientController {
	
	@Autowired
	private CustomerService customerService;
	
	
	
	@PostMapping("/addcustomer")
	public String addEmployee(@RequestBody  Customer customer)
	{
		customerService.addCustomer(customer);
//		customerProfileService.addCustomerProfile(null);
		return "Customer added";
	}
	
	//@GetMapping("/")
	@RequestMapping(value = "/",method = RequestMethod.GET)
	public String view()
	{
		return "hello";
	}
}
