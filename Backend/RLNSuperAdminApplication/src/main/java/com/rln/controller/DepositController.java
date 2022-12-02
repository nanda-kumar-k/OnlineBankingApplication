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
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rln.model.Deposit;
import com.rln.payload.response.ApiResponse;
import com.rln.service.DepositService;

//@CrossOrigin(origins = "http://localhost:3010", maxAge = 3600)
@RestController
@RequestMapping("/api/superadmin/deposit")
public class DepositController {
	
	@Autowired
	public DepositService depositService;
	
	
	@GetMapping("/getallcustomersdeposits")
	@PreAuthorize("isAuthenticated()")
	public ApiResponse<List<Deposit>> __getAllCustomersDeposits() {
		
		ApiResponse<List<Deposit>> res = new ApiResponse<>();
		res.setTimestamp(new Date());
		
		List<Deposit> getCheck = depositService._getAllCustomersDeposits();
		
		if ( getCheck != null ) {
			
			res.setData(getCheck);
			res.setStatusCode(200);
		}
		
		else {
			
			res.setStatusCode(400);
			res.setMessage("Deposits Not Found...!!");
		}
		
		
		return res;
		
	}
 	
	@GetMapping("/customerdeposits/{username}")
	@PreAuthorize("isAuthenticated()")
	public ApiResponse<List<Deposit>> __customerDeposite(@PathVariable("username") String username) {
		
		ApiResponse<List<Deposit>> res = new ApiResponse<>();
		res.setTimestamp(new Date());
		
		List<Deposit> getCheck = depositService._customerDeposits(username);
		
		if ( getCheck != null ) {
			
			res.setData(getCheck);
			res.setStatusCode(200);
		}
		
		else {
			
			res.setStatusCode(400);
			res.setMessage("Deposits Not Found...!!");
		}
		
		return res;
		
	}
	
	@GetMapping("/specificdeposit/{depsoitid}")
	@PreAuthorize("isAuthenticated()")
	public ApiResponse<Deposit> __specificDeposit(
			@PathVariable("depsoitid") String depsoitid ) {
		
		ApiResponse<Deposit> res = new ApiResponse<>();
		res.setTimestamp(new Date());
		
		Deposit check = depositService._specificDeposit(depsoitid);
		
		if ( check != null ) {
			
			res.setData(check);
			res.setMessage("Data found...!!");
			res.setStatusCode(200);
		}
		else {
			
			res.setStatusCode(204);
			res.setMessage("No Deposits Found.!!!");
		}
		
		return res;
		
	}

}
