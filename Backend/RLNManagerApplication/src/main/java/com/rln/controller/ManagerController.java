package com.rln.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.rln.model.Customer;
import com.rln.model.CustomerProfile;
import com.rln.model.Deposit;
import com.rln.model.Employee;
import com.rln.model.Manager;
import com.rln.payload.response.ApiResponse;
import com.rln.payload.response.JwtResponse;
import com.rln.service.ManagerService;



//@CrossOrigin(origins = "http://localhost:3010", maxAge = 3600)
@RestController
@RequestMapping("/api/manager")
public class ManagerController {
	
	@Autowired
	private ManagerService adminService;
	
	@GetMapping("")
	public String test() {
		return "test done";
	}
	
	
	@PostMapping("/managerlogin")
	public JwtResponse __authenticateSuperAdmin(@RequestBody Manager manager) {
		
		return adminService._authenticateManager(manager);
		
	}
	
	
	@GetMapping("/accountrequest")
	@PreAuthorize("isAuthenticated()")
	public ApiResponse<List<Customer>> __allAccountRequest() {
		
		ApiResponse<List<Customer>> res = new ApiResponse<>();
		res.setTimestamp(new Date());
		
		List<Customer> getCheck = adminService._allAccountRequest();
		
		if ( getCheck.isEmpty() ) {
			
			res.setMessage("No Account Request Found...!!");
			res.setStatusCode(400);
			
		}
		else {
			
			res.setData(getCheck);
			res.setStatusCode(200);
		}
		
		return res;
		
	}
	
	
	@GetMapping("/getallcustomers")
	@PreAuthorize("isAuthenticated()")
	public ApiResponse<List<Customer>> __getAllCustomers() {
		
		ApiResponse<List<Customer>> res = new ApiResponse<>();
		res.setTimestamp(new Date());
		
		List<Customer> getCheck = adminService._getAllCustomers();
		
		if ( getCheck != null ) {
			
			res.setData(getCheck);
			res.setStatusCode(200);
		}
		else {
			
			res.setStatusCode(400);
			res.setMessage("No Customers Data Found...!!");
			
		}
		
		return res;
		
	}
	
	
	@GetMapping("/customerprofile/{username}")
	@PreAuthorize("isAuthenticated()")
	public ApiResponse<CustomerProfile> __customerProfile( @PathVariable("username") String username ) {
		
		ApiResponse<CustomerProfile> res = new ApiResponse<>();
		res.setTimestamp(new Date());
		
		
		CustomerProfile getCheck = adminService._getCustomerProfile(username);
		
		if ( getCheck != null ) {
			
			res.setData(getCheck);
			res.setStatusCode(200);
		}
		
		else {
			
			res.setStatusCode(400);
			res.setMessage("Customer Profile Not Found...!!");
		}
		
		return res;
	}
	
	@GetMapping("/customerverification/{username}") 
	@PreAuthorize("isAuthenticated()")
	public ApiResponse<String> __customerVerification(@PathVariable("username") String username) {
		
		ApiResponse<String> res = new ApiResponse<>();
		res.setTimestamp(new Date());
		
		if ( adminService._customerVerification(username) ) {
			
			res.setStatusCode(200);
			res.setMessage("Customer Account Verification Successfull...!!");
			
		}
		else {
			
			res.setStatusCode(400);
			res.setMessage("Customer Account Verification Failed...!!");
		}
		
		return res;
	}
	
	
	
	@PostMapping("/addemployee")
	@PreAuthorize("isAuthenticated()")
	public ApiResponse<String> __addEmployee(@RequestBody Employee employee) {
		
		ApiResponse<String> res = new ApiResponse<>();
		res.setTimestamp(new Date());
		
		if ( adminService._addEmployee(employee) ) {
			
			res.setMessage("Added New Employee Successfull...!!");
			res.setStatusCode(200);
		}
		else  {
			
			res.setStatusCode(400);
			res.setMessage("Username already exit try again...!!");
		}
		
		return res;
	}
	
	@GetMapping("/getallemployee")
	@PreAuthorize("isAuthenticated()")
	public ApiResponse<List<Employee>> __getAllEmployees() {
		
		ApiResponse<List<Employee>> res = new ApiResponse<>();
		res.setTimestamp(new Date());
		
		List<Employee> getCheck = adminService._getAllEmployees();
		
		if ( getCheck != null ) {
			
			res.setData(getCheck);
			res.setStatusCode(200);
		}
		
		else {
			
			res.setStatusCode(400);
			res.setMessage("Employees Not Found...!!");
		}
		
		return res;
	}
	

}
