package com.rln.service;

import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.rln.model.BusinessAPI;
import com.rln.model.BusinessTransaction;
import com.rln.model.Customer;
import com.rln.payload.request.BusinessApiPaymentRequest;
import com.rln.payload.response.ApiPaymentDetailsResponse;
import com.rln.payload.response.ApiPaymentResponse;
import com.rln.payload.response.PaymentStatusResponse;
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
	
	RestTemplate restTemplate = new RestTemplate() ;
	
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
			transaction.setClientUsername(apiPaymentRequest.getClientUsername());
			transaction.setRedirectURL(apiPaymentRequest.getRedirectURL());
			
			businessTransactionRespository.save(transaction);
			
			return paymentreqUUID;
			
			
		}
		else {
			
			return "failed";
		}
		
	}

	@Override
	public ApiPaymentResponse<String> _customerPaymentRequestAuthentication(String username, String password, 
			String requestid, String authdomain){
		
		ApiPaymentResponse<String> res = new ApiPaymentResponse<>();
		res.setTimestamp(new Date());
		
		BusinessAPI api = apiRepository.findByAuthDomain(authdomain);
		
		if ( api != null ) {
			
			BusinessTransaction bapi = businessTransactionRespository.findByPaymentRequestId(requestid);
			
			if ( bapi != null  ) {
				
				if ( bapi.getPaymentRequestCount() <= 5 && bapi.getPaymentRequestCount() >= 1 ) {
//					String pas = encoder.encode(password).toString();
					Customer customer = customerRepository.findByUsernameAndStrongPassword(username, password);
					
					if ( customer != null ) {
						
						String paymentid = UUID.randomUUID().toString();
						
						bapi.setPaymentRequestCount(-1);
						bapi.setPaymentId(paymentid);
						bapi.setPaymentDate(new Date());
						bapi.setPaymentCustomeAccountNumber(customer.getAccountNumber());
						bapi.setPaymentCustomerUsername(username);
//						bapi.setPaymentRequestCount(bapi.getPaymentRequestCount()+1);
						
						businessTransactionRespository.save(bapi);
						
						String comUrl = "http://localhost:3006/paymentconformation/"  + requestid + "/" + paymentid + "/" + authdomain ;
						
						res.setStatusCode(200);
						res.setData(comUrl);
					    
					    return res;
						
					}   
					else {
						
						int left = (5 - bapi.getPaymentRequestCount());
						
						bapi.setPaymentRequestCount(bapi.getPaymentRequestCount()+1);
						businessTransactionRespository.save(bapi);
						
						res.setStatusCode(400);
						res.setMessage("Invalid Username and Password...!! Try again..!!! you left with " + left + " more attempts"  );
						
						return res;
						}
					}
				
				else {
					
					res.setStatusCode(400);
					res.setMessage("Payment Request expired...!!");
					return res;
					
					}
				
				}
			else {
				
				res.setStatusCode(400);
				res.setMessage("Payment Request expired...!!");
				return res;
				}
		}
		
		else {
			
			res.setStatusCode(400);
			res.setMessage("Unauthorized Request...!!");
			return res;
		}
			
	}

	@Override
	public ApiPaymentResponse<ApiPaymentDetailsResponse> _customerPaymentDetailsAuthentication(String requestid, String authdomain,
			String paymentid) {
		
		ApiPaymentResponse<ApiPaymentDetailsResponse> res = new ApiPaymentResponse<>();
		
		BusinessTransaction transaction = businessTransactionRespository.
				findByPaymentRequestIdAndAuthDomainAndPaymentId(requestid, authdomain, paymentid);
		
		ApiPaymentDetailsResponse apiPaymentDetailsResponse = new ApiPaymentDetailsResponse();
		
		if ( transaction != null ) {
			
			if ( transaction.getPaymentRequestCount() <= -1 && transaction.getPaymentRequestCount() > -4 ) {
				 
				Customer customer = customerRepository.findByUsername(transaction.getPaymentCustomerUsername());
				
				if ( customer != null ) {
					
					apiPaymentDetailsResponse.setAccountNumber(transaction.getPaymentCustomeAccountNumber());
					apiPaymentDetailsResponse.setUsername(transaction.getPaymentCustomerUsername());
					apiPaymentDetailsResponse.setAmount(transaction.getAmountPaid());
					apiPaymentDetailsResponse.setPurpose(transaction.getPurpose());
					
					if ( customer.getBalance() - transaction.getAmountPaid() >= 100 ) {
						System.out.println("aaaaaaaaaaaaaaaaaa");	
						transaction.setPaymentRequestCount(transaction.getPaymentRequestCount() + (-1));
						businessTransactionRespository.save(transaction);
						
						res.setStatusCode(200);
						res.setData(apiPaymentDetailsResponse);
						
						return res;
						
					}
					else {
						System.out.println("aaaaaaaaaaaaaaaaaa");	
						res.setStatusCode(100);
						res.setMessage("Insufficient Balance...!!");
						res.setData(apiPaymentDetailsResponse);
						return res;
					}
				}
				
				else  {
					
					res.setStatusCode(400);
					res.setMessage("Unauthorized Request...!!");
					return res;
					
				}
				
			}
			else {
				res.setStatusCode(101);
				res.setMessage("Transaction Time out...!!");
				return res;
			}
			
		}
		else {
			
			res.setStatusCode(400);
			res.setMessage("Unauthorized Request...!!");
			return res;
		}
		
		
	}

	@Override
	public ApiPaymentResponse<String> _amountPaymentAuthentication( String requestid, String authdomain, 
			String paymentid, String username, String amount ) {
		
		ApiPaymentResponse<String> res = new ApiPaymentResponse<>();
		res.setTimestamp(new Date());
		
		BusinessTransaction businessTransaction = businessTransactionRespository.
				findByPaymentRequestIdAndAuthDomainAndPaymentIdAndPaymentCustomerUsername(
						requestid, authdomain, paymentid, username );
		
		if ( businessTransaction != null ) {
			
			if ( businessTransaction.getPaymentRequestCount() <= -1 && businessTransaction.getPaymentRequestCount() > -4 ) {
			
				Customer customer = customerRepository.findByUsername(username);
				
				if( customer != null ) {
					
					if ( customer.getBalance() - businessTransaction.getAmountPaid() >= 100 ) {
					
						customer.setBalance(customer.getBalance() - businessTransaction.getAmountPaid());
						customerRepository.save(customer);
						
						Customer buCustomer = customerRepository.findByUsername(
								businessTransaction.getBusinessAPI().getCustomer().getUsername());
						buCustomer.setBalance(buCustomer.getBalance() + businessTransaction.getAmountPaid());
						customerRepository.save(buCustomer);
						
						businessTransaction.setPaymentRequestCount(-10);
						businessTransaction.setPaymentStatus(true);
						businessTransaction.setPaymentDate(new Date());
						businessTransactionRespository.save(businessTransaction);
	
						
	
						PaymentStatusResponse paymentStatusResponse = new PaymentStatusResponse();
						
						paymentStatusResponse.setTimestamp(new Date());
						paymentStatusResponse.setStatusCode(200);
						paymentStatusResponse.setPaymentStatus(true);
						paymentStatusResponse.setMessage("Transaction Successfull...!!");
						paymentStatusResponse.setDescription("Tansaction Successfull...!!");
						paymentStatusResponse.setPaymentRequestId(businessTransaction.getPaymentRequestId());
						paymentStatusResponse.setPaymentId(businessTransaction.getPaymentId());
						paymentStatusResponse.setClientUsername(businessTransaction.getClientUsername());
						paymentStatusResponse.setAmount(businessTransaction.getAmountPaid());
						
						res.setStatusCode(200);
						res.setData(businessTransaction.getRedirectURL());
						res.setMessage("Transaction Successfull...!!");
						
						try {
//							restTemplate.postForObject(businessTransaction.getRedirectGetURL(), paymentStatusResponse, String.class );
							String url = businessTransaction.getRedirectGetURL() + "/" + businessTransaction.getPaymentId() + "/" +
									businessTransaction.getPaymentId() + "/Credit/";
							restTemplate.getForEntity(url, String.class);
							System.out.println("erorrrrrrrrrrrrrrrrrrrrrrrrr");
							return res;
						}
						catch (Exception e) {
							System.out.println("nooooooooooooooooo");
							return res;
							
						}
						
					}
					
					else {
						
						res.setStatusCode(100);
						res.setMessage("Insufficient Balance...!!");
						return res;
						
					}
					
					
				}
				else {
					
					res.setStatusCode(400);
					res.setMessage("Unauthorized Request...!!");
					return res;
					
				}
			}
			else {
				
				res.setStatusCode(101);
				res.setMessage("Transaction Time out...!!");
				return res;
				
			}
			
		}
		else {
			
			res.setStatusCode(400);
			res.setMessage("Unauthorized Request...!!");
			return res;
			
		}
		
	}

	@Override
	public ApiPaymentResponse<String> _cancelPaymentAuthentication(String requestid, String authdomain,
			String paymentid, String username, String amount) {
		
		ApiPaymentResponse<String> res = new ApiPaymentResponse<>();
		res.setTimestamp(new Date());
		
		BusinessTransaction businessTransaction = businessTransactionRespository.
				findByPaymentRequestIdAndAuthDomainAndPaymentIdAndPaymentCustomerUsername(
						requestid, authdomain, paymentid, username );
		
		if ( businessTransaction != null ) {
			
			businessTransaction.setPaymentDate(new Date());
			businessTransaction.setPaymentRequestCount(-20);
			businessTransactionRespository.save(businessTransaction);
			
			PaymentStatusResponse paymentStatusResponse = new PaymentStatusResponse();
			
			paymentStatusResponse.setTimestamp(new Date());
			paymentStatusResponse.setStatusCode(400);
			paymentStatusResponse.setPaymentStatus(false);
			paymentStatusResponse.setMessage("Transaction cancelled...!!");
			paymentStatusResponse.setDescription("Transaction cancelled by client...!!");
			paymentStatusResponse.setPaymentRequestId(businessTransaction.getPaymentRequestId());
			paymentStatusResponse.setPaymentId(businessTransaction.getPaymentId());
			paymentStatusResponse.setClientUsername(businessTransaction.getClientUsername());
			paymentStatusResponse.setAmount(businessTransaction.getAmountPaid());
			
			
			res.setStatusCode(200);
			res.setData(businessTransaction.getRedirectURL());
			res.setMessage("Transaction Canceled...!!");
			
			try {
//				restTemplate.postForObject(businessTransaction.getRedirectGetURL(), paymentStatusResponse, String.class );
				String url = businessTransaction.getRedirectGetURL() + "/" + businessTransaction.getPaymentId() + "/" +
						businessTransaction.getPaymentId() + "/Failed/";
				restTemplate.getForEntity(url, String.class);
				System.out.println("erorrrrrrrrrrrrrrrrrrrrrrrrr");
				return res;
			}
			catch (Exception e) {
				System.out.println("nooooooooooooooooo");
				return res;
					
			}
			
			
		}
		else {
			res.setStatusCode(400);
			res.setMessage("Unauthorized Request...!!");
			return res;
		}
		
		
	}

}

