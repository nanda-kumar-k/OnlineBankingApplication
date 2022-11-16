package com.rln.service;

import com.rln.model.Customer;
import com.rln.payload.request.BusinessApiPaymentRequest;

public interface BusinessService {
	
	String _paymentRequestAuthentication(BusinessApiPaymentRequest apiPaymentRequest);
	
	boolean _customerPaymentRequestAuthentication(String username, String password, String requestid, String authdomain);

}
