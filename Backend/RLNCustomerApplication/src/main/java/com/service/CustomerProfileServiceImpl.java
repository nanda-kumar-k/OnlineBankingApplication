package com.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.model.CustomerProfile;
import com.respository.CustomerProfileRepository;


@Service
public class CustomerProfileServiceImpl implements CustomerProfileService{
	
	@Autowired(required=true)
	 private CustomerProfileRepository customerProfileRepository;

	@Override
	public String addCustomerProfile(CustomerProfile customerProfile) {
		customerProfileRepository.save(customerProfile);
		return null;
	}

}
