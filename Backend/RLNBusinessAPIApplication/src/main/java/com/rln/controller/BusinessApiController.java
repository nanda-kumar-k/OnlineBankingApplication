package com.rln.controller;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.rln.payload.request.BusinessApiPaymentRequest;
import com.rln.payload.request.CustomerAuthentication;
import com.rln.payload.response.ApiPaymentDetailsResponse;
import com.rln.payload.response.ApiPaymentResponse;
import com.rln.payload.response.ApiPaymentUrlResponse;
import com.rln.service.BusinessService;

//@CrossOrigin(origins = "*", allowedHeaders = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/business")
public class BusinessApiController {
	
	@Autowired
	public BusinessService businessService;
	
	
	RestTemplate restTemplate = new RestTemplate();
	
	@PostMapping("/paymentrequest")
	public ApiPaymentUrlResponse __paymentRequest( @RequestBody BusinessApiPaymentRequest apiPaymentRequest  ) throws URISyntaxException {
		
		ApiPaymentUrlResponse res = new ApiPaymentUrlResponse();
		res.setTimestamp(new Date());
		
		if ( apiPaymentRequest.getAmount() < 10 ) {
			
			res.setStatusCode(400);
			res.setMessage("Minimum amount should be 10 rupess...!!");
			res.setDescription("Accoding to the RLN Business rule, In any Business Payment transaction, minimum transaction amount should 10 rupess.");
			
			return res;
			
		}
		
		if ( apiPaymentRequest.getApiKey() != null && apiPaymentRequest.getPurpose() != null &&
				apiPaymentRequest.getAuthDomain() != null && apiPaymentRequest.getRedirectGetURL() != null 
				&& apiPaymentRequest.getClientUsername() != null &&  apiPaymentRequest.getRedirectURL() != null
				) {
			
			String checkRes = businessService._paymentRequestAuthentication(apiPaymentRequest);
			
			if ( checkRes.equals("failed") ) {
				
				res.setStatusCode(400);
				res.setMessage("Invalid apiKey and authDomain...!! Try again..!!");
				res.setDescription("Accoding to the RLN Business rule, you need pass apiKey and authDomain should be valid one.");
				
				return res;
			}
			else {
				
				String comUrl = "http://localhost:3006/"  + checkRes + "/" + apiPaymentRequest.getAuthDomain()  ;
				
				res.setStatusCode(200);
				res.setPaymentURL(comUrl);
			    res.setMessage("redirect to payment url for payment...!!");
			    return res;
			}
			
		}
		
		else {
			
			res.setStatusCode(400);
			res.setMessage("All fileds are mandatory...!! please check it once...!!");
			res.setDescription("Accoding to the RLN Business rule, you need to pass apiKey, authDomain, redirectGetUrl, amount, redirecturl and clientusername. or if you pass all values, check your keys names once. keys are case sensitive...!!");
			
			return res;
		}
		
	}
	
	
	@PostMapping("/{requestid}/{authdomain}")
	public ApiPaymentResponse<String> __customerPaymentRequestAuthentication(
			@RequestBody CustomerAuthentication authentication , @PathVariable("requestid") String requestid , @PathVariable("authdomain") String authdomain ) {
		
		return businessService._customerPaymentRequestAuthentication(authentication.getUsername(), authentication.getPassword(), requestid, authdomain);
	}
	
	@GetMapping("/paydetails/{requestid}/{paymentid}/{authdomain}")
	public ApiPaymentResponse<ApiPaymentDetailsResponse> __customerPaymentDetailsAuthentication(
			@PathVariable("requestid") String requestid , @PathVariable("paymentid") String paymentid , @PathVariable("authdomain") String authdomain
			) {
		System.out.println("tttttttttttttttttttttttttttttttttttttttttt");
		return businessService._customerPaymentDetailsAuthentication(requestid, authdomain, paymentid);
	}
	
	
	@GetMapping("/pay/{requestid}/{paymentid}/{username}/{amount}/{authdomain}")
	public ApiPaymentResponse<String> __amountPaymentAuthentication(
			@PathVariable("requestid") String requestid , 
			@PathVariable("paymentid") String paymentid , @PathVariable("username") String username , 
			@PathVariable("amount") String amount, @PathVariable("authdomain") String authdomain
			) {
		
		return businessService._amountPaymentAuthentication(requestid, authdomain, paymentid, username, amount);
	}
	
	
	
	@GetMapping("/cancel/{requestid}/{paymentid}/{username}/{amount}/{authdomain}")
	public ApiPaymentResponse<String> __cancelPaymentAuthentication(
			@PathVariable("requestid") String requestid , 
			@PathVariable("paymentid") String paymentid , @PathVariable("username") String username , 
			@PathVariable("amount") String amount, @PathVariable("authdomain") String authdomain
			) {
		
		return businessService._cancelPaymentAuthentication(requestid, authdomain, paymentid, username, amount);
		
	}
	
	@GetMapping("/")
	public ResponseEntity<Object> redirectToExternalUrl() throws URISyntaxException {
		System.out.println("ffffffffffffffffff");
		ApiPaymentResponse res = new ApiPaymentResponse();
		res.setMessage("nanda");
	    URI uri = new URI("http://www.google.com");
	    HttpHeaders httpHeaders = new HttpHeaders();
	    httpHeaders.setLocation(uri);
	    return new ResponseEntity<>("nanu", HttpStatus.SEE_OTHER);
	}
	
	

}
