package com.rln.RLNApplication.Customer.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.rln.RLNApplication.Customer.Service.customerservice;

@Controller
public class ClientController 
{ 
	
	@Autowired
	 private 	customerservice CustomerService;
   
}
