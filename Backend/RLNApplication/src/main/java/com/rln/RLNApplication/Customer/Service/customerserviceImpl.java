package com.rln.RLNApplication.Customer.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rln.RLNApplication.Customer.Repository.CustomerRepository;


@Service
public class customerserviceImpl implements customerservice
{
	@Autowired
	 private CustomerRepository cunstomerRepository;
	
}
