package com.rln.service;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Date;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.rln.model.BusinessAPI;
import com.rln.model.BusinessTransaction;
import com.rln.model.Customer;
import com.rln.payload.request.BusinessApiPaymentRequest;
import com.rln.payload.response.ApiPaymentResponse;
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
	public ResponseEntity<Object> _customerPaymentRequestAuthentication(String username, String password, 
			String requestid, String authdomain) throws URISyntaxException {
		
		ApiPaymentResponse res = new ApiPaymentResponse();
		res.setTimestamp(new Date());
		
		BusinessAPI api = apiRepository.findByAuthDomain(authdomain);
		
		if ( api != null ) {
			
			BusinessTransaction bapi = businessTransactionRespository.findByPaymentRequestId(requestid);
			
			if ( bapi != null  ) {
				
				if ( bapi.getPaymentRequestCount() <= 5 ) {
					
					Customer customer = customerRepository.findByUsernameAndPassword(username, password);
					
					if ( customer != null ) {
						
						String paymentid = UUID.randomUUID().toString();
						
						bapi.setPaymentId(paymentid);
						bapi.setPaymentDate(new Date());
						bapi.setPaymentCustomeAccountNumber(customer.getAccountNumber());
						bapi.setPaymentCustomerUsername(username);
						bapi.setPaymentRequestCount(bapi.getPaymentRequestCount()+1);
						
						businessTransactionRespository.save(bapi);
						
						String comUrl = "" + "/" + authdomain + "/" + requestid + "/" + paymentid ;
						
						res.setStatusCode(200);
						res.setData(comUrl);
					    
					    return new ResponseEntity<> (res, HttpStatus.PAYMENT_REQUIRED );
						
					}
					else {
						
						int left = (5 - bapi.getPaymentRequestCount());
						
						bapi.setPaymentRequestCount(bapi.getPaymentRequestCount()+1);
						businessTransactionRespository.save(bapi);
						
						res.setStatusCode(401);
						res.setMessage("Invalid Username and Password...!! Try again..!!! you left with " + left + " more attempts"  );
						
						
					}
				}
				
				else {
					
					res.setStatusCode(408);
					res.setMessage("Payment Request expired...!!");
				}
				
			}
			else {
				
				res.setStatusCode(408);
				res.setMessage("Payment Request expired...!!");
			}
		}
		
		else {
			
			res.setStatusCode(401);
			res.setMessage("Unauthorized Request...!!");
		}
		
		return new ResponseEntity<> ("", HttpStatus.BAD_REQUEST );
		
	}

}
