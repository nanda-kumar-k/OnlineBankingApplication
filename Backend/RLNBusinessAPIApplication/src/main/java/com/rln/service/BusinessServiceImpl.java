package com.rln.service;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rln.model.BusinessAPI;
import com.rln.model.BusinessTransaction;
import com.rln.model.Customer;
import com.rln.payload.request.BusinessApiPaymentRequest;
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
	public String _paymentRequestAuthentication(BusinessApiPaymentRequest apiPaymentRequest) {
		
		BusinessAPI api = apiRepository.findByApiKeyAndAuthDomain(
				apiPaymentRequest.getApiKey(), apiPaymentRequest.getAuthDomain());
		
		if ( api != null ) {
			
			String paymentreqUUID = UUID.randomUUID().toString();
			BusinessTransaction transaction = new BusinessTransaction();
			
			transaction.setAmountPaid(apiPaymentRequest.getAmount());
			transaction.setPaymentRequestId(paymentreqUUID);
			transaction.setPurpose(apiPaymentRequest.getPurpose());
			transaction.setRedirectGetURL(apiPaymentRequest.getRedirectGetURL());
			transaction.setPaymentRequestCount(1);
			transaction.setBusinessAPI(api);
			
			businessTransactionRespository.save(transaction);
			
			return paymentreqUUID;
			
			
		}
		else {
			
			return "failed";
		}
		
	}

	@Override
	public boolean _customerPaymentRequestAuthentication(String username, String password, 
			String requestid, String authdomain) {
		
		Customer customer = customerRepository.findByUsernameAndPassword(username, password);
		
		if ( customer != null ) {
			
			
			
			return true;
			
		}
		else {
			
			return false;
		}
		
	}

}
