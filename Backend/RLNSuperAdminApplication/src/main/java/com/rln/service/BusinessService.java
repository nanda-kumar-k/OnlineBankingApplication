package com.rln.service;

import java.util.List;

import com.rln.model.BusinessAPI;
import com.rln.model.BusinessTransaction;

public interface BusinessService {
	
	boolean _apiKeyCreation(String token);
	
	BusinessAPI _apiKeyRequest(String token);
	
	List<BusinessTransaction> _getAllBusinessTractions(String token);

}
