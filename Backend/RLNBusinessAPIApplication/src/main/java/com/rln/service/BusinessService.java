package com.rln.service;

import java.net.URISyntaxException;

import org.springframework.http.ResponseEntity;

import com.rln.model.Customer;
import com.rln.payload.request.BusinessApiPaymentRequest;
import com.rln.payload.response.ApiPaymentDetailsResponse;
import com.rln.payload.response.ApiPaymentResponse;

public interface BusinessService {
	
	String _paymentRequestAuthentication(BusinessApiPaymentRequest apiPaymentRequest);
	
	ApiPaymentResponse<String> _customerPaymentRequestAuthentication(String username, String password, 
			String requestid, String authdomain);
	
	ApiPaymentResponse<ApiPaymentDetailsResponse> _customerPaymentDetailsAuthentication(String requestid, String authdomain, 
			String paymentid);
	
	ApiPaymentResponse<String> _amountPaymentAuthentication(String requestid, String authdomain, 
			String paymentid, String username, String amount);
	
	ApiPaymentResponse<String> _cancelPaymentAuthentication(String requestid, String authdomain, 
			String paymentid, String username, String amount);

}
