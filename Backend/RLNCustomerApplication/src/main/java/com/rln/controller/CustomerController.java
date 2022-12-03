package com.rln.controller;



import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.rln.model.Customer;
import com.rln.model.CustomerProfile;
import com.rln.model.RLNServiceRating;
import com.rln.payload.response.ApiResponse;
import com.rln.payload.response.JwtResponse;
import com.rln.security.jwt.JwtUtils;
import com.rln.service.CustomerService;
import com.rln.service.FilesStorageService;


//@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("/api/customer")
public class CustomerController {
	

	@Autowired
	public CustomerService customerService;
	
	@Autowired
	public FilesStorageService storageService;
		
	
	@GetMapping("/checkuser")
	public ApiResponse<String> __checkUsernameAvailability(@RequestParam String username) {
		
		ApiResponse<String> res = new ApiResponse<>();
		res.setTimestamp(new Date());
		
		if ( customerService._checkUsernameAvailability(username) ) {
			
			res.setStatusCode(100);
			res.setMessage("Username Not found...!!");
			
		}
		else {
			
			res.setStatusCode(101);
			res.setMessage("Username Already Exit...!! Try with alternate username...!!!");
		}
		
		return res;
	}
	
	@PostMapping("/createrlncustomer")
	public ApiResponse<String> __createRLNCustomer(@RequestBody CustomerProfile customerProfile) {
		
		ApiResponse<String> res = new ApiResponse<>();
		res.setTimestamp(new Date());
		System.out.println("nandaaaaa");
		if ( customerService._createRLNCustomer(customerProfile) ) {
			
			res.setStatusCode(201);
			res.setMessage("Account Created successfully...!!!");
			
		}
		else {
			res.setStatusCode(400);
			res.setMessage(" Account Cannot created for given data...!!! ");
		}
		
		return res;
	}
	
	
	@PostMapping("/uploadcustomerphoto/{username}")
	public ApiResponse<String> __uploadCustomerPhoto(
			@RequestParam("file") MultipartFile file , @PathVariable("username") String username) {
		
		ApiResponse<String> res = new ApiResponse<>();
		res.setTimestamp(new Date());
		
		String checkRes =  customerService._uploadCustomerPhoto(file, username);
		
		if(checkRes.equals("uploaded")) {
			
			res.setMessage("Image uploaded successfully");
			res.setStatusCode(200);
			
		}
		else {
			
			res.setMessage(checkRes);
			res.setStatusCode(400);
		}
		
		return res;
	}
	
	
	@PostMapping("/authenticaterlncustomer")
	public JwtResponse authenticateCustomer(@RequestBody Customer customer){
		
		return customerService._authenticateCustomer(customer);
	}
	
	
	@GetMapping("/checkbalance") 
	@PreAuthorize("isAuthenticated()")
	public ApiResponse<Customer> __checkCustomerBalance(@RequestHeader("Authorization") String token) {
		
		ApiResponse<Customer> res = new ApiResponse<>();
		res.setTimestamp(new Date());
		
		Customer customer = customerService._checkCustomerBalance(token);
		
		Customer cres = new Customer();
		cres.setAccountNumber(customer.getAccountNumber());
		cres.setAccountType(customer.getAccountType());
		cres.setBalance(customer.getBalance());
		cres.setUsername(customer.getUsername());
		
		res.setData(cres);
		res.setStatusCode(200);
		res.setMessage("Data found");
		
		return res;
	}
	
	
	@GetMapping("/customerprofile")
	@PreAuthorize("isAuthenticated()")
	public ApiResponse<CustomerProfile> getCustomerProfile(@RequestHeader("Authorization") String token) {
		
		ApiResponse<CustomerProfile> res = new ApiResponse<CustomerProfile>();
		res.setTimestamp(new Date());
		
		CustomerProfile getCheck = customerService._getCustomerProfile(token);
		
		if ( getCheck != null ) {
			
			res.setData(getCheck);
			res.setStatusCode(200);
			res.setMessage("Data founded...!!");
		}
		else {
			
			res.setStatusCode(204);
			res.setMessage("Profile Not Founded Contact near RLN Bank...!!");
			
		}
		return res;
		
	}
	
	
	 @GetMapping("/uploads/customerimages/{filename:.+}")
	 public ResponseEntity<Resource> getFile(@PathVariable String filename) {
		
	    Resource file = storageService.load(filename);
	    
	    return ResponseEntity.ok()
	        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"").body(file);
	  
	}
	
	
	 
	 @PostMapping("/updateprofile")
	 public ApiResponse<String> __updateCustomerProfile( @RequestHeader("Authorization") String token, @RequestBody CustomerProfile customerProfile ) {
		 ApiResponse<String> res = new ApiResponse<>();
		 res.setTimestamp(new Date());
		 
		 if ( customerService._updateCustomerProfile(customerProfile, token) ) {
			
			 res.setMessage("Profile Updated...!!!");
			 res.setStatusCode(200);
		 }
		 else {
			 res.setStatusCode(400);
			 res.setMessage("Internal Server Error...!!");
		 }
		 
		 return res;
	 }
	 
	 
	 @PostMapping("/rating")
	 public ApiResponse<String> __rating(@RequestBody RLNServiceRating  serviceRating) {
		 ApiResponse<String>  res = new ApiResponse<>();
		 res.setTimestamp(new Date());
		 
		 customerService._rating(serviceRating);
		 
		 res.setStatusCode(200);
		 res.setMessage("Thanks for your Rating");
		 return res;
	 }
	 
	
	//permitAll()
//	@PreAuthorize("hasAuthority('Admin')")
	
	@GetMapping("/check")
//	@PreAuthorize("hasRole('TYPE_SAVINGS')")
	@PreAuthorize("isAuthenticated()")
	public String Check(@RequestHeader("Authorization") String token) {
		System.out.println(token.substring(7));
		JwtUtils jwtUtils = new JwtUtils();
		System.out.println(jwtUtils.getUserNameFromJwtToken(token.substring(7)));
		
		return token.substring(7);
	}

}
