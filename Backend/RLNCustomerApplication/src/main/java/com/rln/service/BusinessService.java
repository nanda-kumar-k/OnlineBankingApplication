package com.rln.service;

import com.rln.model.BusinessAPI;

public interface BusinessService {
	
	boolean _apiKeyCreation(String token);
	
	BusinessAPI _apiKeyRequest(String token);

}
