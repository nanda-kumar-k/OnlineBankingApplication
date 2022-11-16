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

import com.rln.payload.request.BusinessApiPaymentRequest;
import com.rln.payload.request.CustomerAuthentication;
import com.rln.payload.response.ApiPaymentResponse;
import com.rln.service.BusinessService;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("/api/business")
public class BusinessApiController {
	
	@Autowired
	public BusinessService businessService;
	
	
	@PostMapping("/")
	public ResponseEntity<Object> __paymentRequest( @RequestBody BusinessApiPaymentRequest apiPaymentRequest  ) throws URISyntaxException {
		
		ApiPaymentResponse res = new ApiPaymentResponse();
		res.setTimestamp(new Date());
		
		if ( apiPaymentRequest.getAmount() < 10 ) {
			
			res.setStatusCode(400);
			res.setMessage("Minimum amount should be 10 rupess...!!");
			res.setDescription("Accoding to the RLN Business rule, In any Business Payment transaction, minimum transaction amount should 10 rupess.");
			
			return new ResponseEntity<> (res, HttpStatus.BAD_REQUEST );
			
		}
		
		if ( apiPaymentRequest.getApiKey() != null && apiPaymentRequest.getPurpose() != null &&
				apiPaymentRequest.getAuthDomain() != null && apiPaymentRequest.getRedirectGetURL() != null
				) {
			
			String checkRes = businessService._paymentRequestAuthentication(apiPaymentRequest);
			
			if ( checkRes.equals("failed") ) {
				
				res.setStatusCode(401);
				res.setMessage("Invalid apiKey and authDomain...!! Try again..!!");
				res.setDescription("Accoding to the RLN Business rule, you need pass apiKey and authDomain should be valid one.");
				
				return new ResponseEntity<> (res, HttpStatus.BAD_REQUEST );
			}
			else {
				
				String comUrl = "" + "/" + apiPaymentRequest.getAuthDomain() + checkRes ;
				
//				URI uri = new URI("http://www.google.com");
				URI uri = new URI(comUrl);
			    HttpHeaders httpHeaders = new HttpHeaders();
			    httpHeaders.setLocation(uri);
			    
			    return new ResponseEntity<>(uri, HttpStatus.SEE_OTHER);
			}
			
		}
		
		else {
			
			res.setStatusCode(400);
			res.setMessage("All fileds are mandatory...!! please check it once...!!");
			res.setDescription("Accoding to the RLN Business rule, you need to pass apiKey, authDomain, redirectGetUrl, amount. or if you pass all values, check your keys names once. keys are case sensitive...!!");
			
			return new ResponseEntity<> (res, HttpStatus.BAD_REQUEST );
		}
		
	}
	
	
	@PostMapping("/{requestid}/{authdomain}")
	public ResponseEntity<Object> __customerPaymentRequestAuthentication(
			@RequestBody CustomerAuthentication authentication , @PathVariable("requestid") String requestid , @PathVariable("authdomain") String authdomain ) {
		
		
		
		return new ResponseEntity<> ("", HttpStatus.BAD_REQUEST );
	}
	
	
	
	
	@GetMapping("/")
	public ResponseEntity<Object> redirectToExternalUrl() throws URISyntaxException {
		ApiPaymentResponse res = new ApiPaymentResponse();
		res.setMessage("nanda");
	    URI uri = new URI("http://www.google.com");
	    HttpHeaders httpHeaders = new HttpHeaders();
	    httpHeaders.setLocation(uri);
	    return new ResponseEntity<>(res, HttpStatus.SEE_OTHER);
	}

}
