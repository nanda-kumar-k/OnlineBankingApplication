package com.rln.service;

import java.util.List;

import com.rln.model.BusinessAPI;
import com.rln.model.BusinessTransaction;

public interface BusinessService {
		
	List<BusinessTransaction> _getCustomerBusinessApiTractions(String username);
	
	List<BusinessAPI> _getAllBusinessApiCustomers();
	
	List<BusinessTransaction> getAllBusinessApiTransactions();

}
