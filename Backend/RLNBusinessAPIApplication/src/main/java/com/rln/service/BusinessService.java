package com.rln.service;

import java.net.URISyntaxException;

import org.springframework.http.ResponseEntity;

import com.rln.model.Customer;
import com.rln.payload.request.BusinessApiPaymentRequest;
import com.rln.payload.response.ApiPaymentDetailsResponse;

public interface BusinessService {
	
	String _paymentRequestAuthentication(BusinessApiPaymentRequest apiPaymentRequest);
	
	ResponseEntity<Object> _customerPaymentRequestAuthentication(String username, String password, 
			String requestid, String authdomain) throws URISyntaxException;
	
	ResponseEntity<Object> _customerPaymentDetailsAuthentication(String requestid, String authdomain, 
			String paymentid);
	
	ResponseEntity<Object> _amountPaymentAuthentication(String requestid, String authdomain, 
			String paymentid, String username, String amount);

}
