package com.rln.service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rln.model.BusinessAPI;
import com.rln.model.BusinessTransaction;
import com.rln.model.Customer;
import com.rln.repository.BusinessAPIRepository;
import com.rln.repository.BusinessTransactionRespository;

@Service
public class BusinessServiceImpl implements BusinessService {
	
	@Autowired
	private BusinessAPIRepository apiRepository;
	
	@Autowired
	private BusinessTransactionRespository businessTransactionRespository;
	
	@Autowired
	private CustomerService customerService;

	@Override
	public boolean _apiKeyCreation(String token) {
		
		Customer customer = customerService._checkCustomerBalance(token);
		
		if ( customer != null ) {
			
			if  ( customer.getAccountType().equals("business") ) {
				
				BusinessAPI api = new BusinessAPI();
				
				api.setCustomer(customer);
				api.setApiKey(UUID.randomUUID().toString());
				api.setCustomerAccountNumber(customer.getAccountNumber());
				
				String authDomain = UUID.randomUUID().toString() + "." + customer.getUsername();
				api.setAuthDomain(authDomain);
				
				apiRepository.save(api);
				
				return true;
			}
		}
		
		return false;
	}

	@Override
	public BusinessAPI _apiKeyRequest(String token) {
		
		Customer customer = customerService._checkCustomerBalance(token);
		BusinessAPI api;
		
		if ( customer != null ) {
			
			api = apiRepository.findByCustomerAccountNumber(customer.getAccountNumber());
			
			if ( api != null ) {
				
				api.setApiTableId(0);
				api.setCreatedDate(null);
				api.setCustomer(null);
				api.setCustomerrefid(0);
				
				return api;
			}
			
			
			
		}
		
		return null;
	}

	@Override
	public List<BusinessTransaction> _getAllBusinessTractions(String token) {
		
		Customer customer = customerService._checkCustomerBalance(token);
		
		List<BusinessTransaction> businessTransaction = 
				(List<BusinessTransaction>) businessTransactionRespository.findAll();
		
		List<BusinessTransaction> res = new ArrayList<>();
		
		for ( int i = 0; i < businessTransaction.size(); i++ ) {
			
			if ( businessTransaction.get(i).getBusinessAPI().getCustomerAccountNumber()
					.equals(customer.getAccountNumber()) ) {
				
				res.add(businessTransaction.get(i));
				
			}
			
		}
		
		
		return res;
	}

}
