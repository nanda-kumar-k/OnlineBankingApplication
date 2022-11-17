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
import com.rln.payload.response.ApiPaymentDetailsResponse;
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
			transaction.setAuthDomain(api.getAuthDomain());
			
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
				
				if ( bapi.getPaymentRequestCount() <= 5 && bapi.getPaymentRequestCount() >= 1 ) {
					
					Customer customer = customerRepository.findByUsernameAndPassword(username, password);
					
					if ( customer != null ) {
						
						String paymentid = UUID.randomUUID().toString();
						
						bapi.setPaymentRequestCount(-1);
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

	@Override
	public ResponseEntity<Object> _customerPaymentDetailsAuthentication(String requestid, String authdomain,
			String paymentid) {
		
		BusinessTransaction businessTransaction = businessTransactionRespository
				.findByPaymentRequestIdAndAuthDomainAndPaymentId(requestid, authdomain, paymentid);
		
		if ( businessTransaction != null  ) {
			
			if ( businessTransaction.getPaymentRequestCount() == -1 ) {
				
				Customer customer = customerRepository.findByUsername(businessTransaction.getPaymentCustomerUsername());
				
				if ( customer != null ) {
					
					if ( customer.getBalance() - businessTransaction.getAmountPaid() >= 100 ) {
						
						ApiPaymentDetailsResponse apiPaymentDetailsResponse = new ApiPaymentDetailsResponse();
						
						apiPaymentDetailsResponse.setAccountNumber(businessTransaction.getPaymentCustomeAccountNumber());
						apiPaymentDetailsResponse.setUsername(businessTransaction.getPaymentCustomerUsername());
						apiPaymentDetailsResponse.setAmount(businessTransaction.getAmountPaid());
						apiPaymentDetailsResponse.setPurpose(businessTransaction.getPurpose());
						
						businessTransaction.setPaymentRequestCount(-2);
						businessTransactionRespository.save(businessTransaction);
						
						return new ResponseEntity<> ( apiPaymentDetailsResponse, HttpStatus.PAYMENT_REQUIRED );
						
					}
					else {
						
						
					}
				}
				else {
					
					
				}
				
				
			}
			else {
				
				
			}
				
		}
		else {
			
			
		}
		
		return null;
	}

	@Override
	public ResponseEntity<Object> _amountPaymentAuthentication( String requestid, String authdomain, 
			String paymentid, String username, String amount ) {
		
		BusinessTransaction businessTransaction = businessTransactionRespository.
				findByPaymentRequestIdAndAuthDomainAndPaymentIdAndPaymentCustomerUsername(
						requestid, authdomain, paymentid, username );
		
		if ( businessTransaction != null ) {
			
			Customer customer = customerRepository.findByUsername(username);
			
			if( customer != null ) {
				
				customer.setBalance(customer.getBalance() - businessTransaction.getAmountPaid());
				customerRepository.save(customer);
				
				Customer buCustomer = customerRepository.findByUsername(
						businessTransaction.getBusinessAPI().getCustomer().getUsername());
				buCustomer.setBalance(buCustomer.getBalance() + businessTransaction.getAmountPaid());
				customerRepository.save(buCustomer);
				
				businessTransaction.setPaymentStatus(true);
				businessTransactionRespository.save(businessTransaction);
				
			}
			else {
				
			}
		}
		else {
			
			
		}
		
		return null;
	}

}
