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
import com.rln.repository.CustomerRepository;

@Service
public class BusinessServiceImpl implements BusinessService {
	
	@Autowired
	private BusinessAPIRepository apiRepository;
	
	@Autowired
	private BusinessTransactionRespository businessTransactionRespository;
	
	@Autowired
	private CustomerRepository customerRepository;


	@Override
	public List<BusinessAPI> _getAllBusinessApiCustomers() {
		
		List<BusinessAPI> res = (List<BusinessAPI>) apiRepository.findAll();
		
		return res;
	}

	@Override
	public List<BusinessTransaction> getAllBusinessApiTransactions() {
		
		List<BusinessTransaction> res = (List<BusinessTransaction>) businessTransactionRespository.findAll();
		
		return res;
	}
	
	@Override
	public List<BusinessTransaction> _getCustomerBusinessApiTractions(String username) {
		
		Customer customer = customerRepository.findByUsername(username).get();
		
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
