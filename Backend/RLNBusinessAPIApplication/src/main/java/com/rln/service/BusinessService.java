package com.rln.service;

import java.net.URISyntaxException;

import org.springframework.http.ResponseEntity;

import com.rln.model.Customer;
import com.rln.payload.request.BusinessApiPaymentRequest;

public interface BusinessService {
	
	String _paymentRequestAuthentication(BusinessApiPaymentRequest apiPaymentRequest);
	
	ResponseEntity<Object> _customerPaymentRequestAuthentication(String username, String password, String requestid, String authdomain) throws URISyntaxException;

}
