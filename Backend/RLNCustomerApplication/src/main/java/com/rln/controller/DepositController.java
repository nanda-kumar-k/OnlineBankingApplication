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

//@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("/api/customer/deposit")
public class DepositController {
	
	@Autowired
	public DepositService depositService;
	
	
	@PostMapping("/opennewdeposit")
	@PreAuthorize("isAuthenticated()")
	public ApiResponse<String> __openNewDeposit( 
			@RequestBody Deposit deposit , @RequestHeader("Authorization") String token) {
		
		ApiResponse<String> res = new ApiResponse<>();
		res.setTimestamp(new Date());
		
		String status = depositService._openNewCUstomerDeposit(deposit, token);
		
		if( status.equals("created") ) {
			
			res.setStatusCode(200);
			res.setMessage("new deposite created...!!");
			
		}
		else {
			
			res.setMessage(status);
			res.setStatusCode(401);
		}
		
		return res;
	}
	
	
	@GetMapping("/getalldeposits")
	@PreAuthorize("isAuthenticated()")
	public ApiResponse<List<Deposit>> __getAllDeposits(@RequestHeader("Authorization") String token) {
		
		ApiResponse<List<Deposit>> res = new ApiResponse<>();
		res.setTimestamp(new Date());
		
		List<Deposit> datares = depositService._getAllDeposits(token);
		
		if(datares.size() >0) {
			
			res.setData(datares);
			res.setMessage("Data Found...!!");
			res.setStatusCode(200);
		}
		
		else {
			
			res.setMessage("No Deposits Found.!!!");
			res.setStatusCode(204);
		}
		
		return res;
		
	}
	
	@GetMapping("/specificdeposit/{depsoitid}")
	@PreAuthorize("isAuthenticated()")
	public ApiResponse<Deposit> __specificDeposit(
			@RequestHeader("Authorization") String token , @PathVariable("depsoitid") String depsoitid ) {
		
		ApiResponse<Deposit> res = new ApiResponse<>();
		res.setTimestamp(new Date());
		
		Deposit check = depositService._specificDeposit(depsoitid, token);
		
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
	
	
	@GetMapping("/closedeposit/{depsoitid}")
	@PreAuthorize("isAuthenticated()")
	public ApiResponse<String> __closeDeposit ( 
			@RequestHeader("Authorization") String token , @PathVariable("depsoitid") String depsoitid ) {
		
		ApiResponse<String> res = new ApiResponse<>();
		res.setTimestamp(new Date());
		
		if( depositService._closeDeposit(depsoitid, token) ) {
			
			res.setStatusCode(200);
			res.setMessage("deposit closed successfully...!!");
			
		}
		else {
			
			res.setStatusCode(400);
			res.setMessage("we can't close your deposit, please contract nearest rln bank...!!");
		}
		
		return res;
		
	}
	
	
	
	

}
