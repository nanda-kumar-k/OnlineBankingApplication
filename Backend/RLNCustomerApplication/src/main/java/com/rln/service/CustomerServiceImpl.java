package com.rln.service;

import java.math.BigInteger;
import java.util.Optional;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rln.model.Customer;
import com.rln.model.CustomerProfile;
import com.rln.repository.CustomerProfileRepository;
import com.rln.repository.CustomerRepository;

@Service
public class CustomerServiceImpl implements CustomerService {
	
	@Autowired
	private CustomerRepository customerRepository;
	
	@Autowired
	private CustomerProfileRepository customerProfileRepository;
	
	
	@Override
	public boolean _checkCustomer(String user) {
		
		Optional<Customer> check = customerRepository.findByUsername(user);
		
		System.out.println(check);
		
		if (check.isEmpty()) {
			return false;
		}
		
		return true;
	}

	
	@Override
	public boolean _checkAccountNumber(BigInteger accNo) {
		Optional<Customer> optional = customerRepository.findByAccountNumber(accNo);
		if(optional.isEmpty()) {
			return true;
		}
		return false;
	}
	
	
	@Override
	public boolean _createRLNCustomer(CustomerProfile customerProfile) {
		
		Random random = new Random();
		
		BigInteger bigInteger = BigInteger.valueOf(Math.round(random.nextFloat() * Math.pow(10,12)));
		
		if (_checkAccountNumber(bigInteger)) {
			
			customerProfile.getCustomer_ref().setAccountNumber(bigInteger);			
			Customer customer = customerRepository.save(customerProfile.getCustomer_ref());
			if(customer != null) {
				customerProfile.setCustomer_ref(customer);
				CustomerProfile cp = customerProfileRepository.save(customerProfile);
				if (cp !=  null ) {
					return true;
				}
				else {
					return false;
				}
			}
		}
		
		else {
			return _createRLNCustomer(customerProfile);
		}
		
		return false;
	}


	

}
