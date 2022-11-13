package com.rln.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rln.model.Deposit;
import com.rln.payload.response.ApiResponse;
import com.rln.service.DepositService;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
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
			res.setMessage("new deposite opned...!!");
			
		}
		else {
			
			res.setMessage(status);
			res.setStatusCode(401);
		}
		
		return res;
	}
	
	
	@GetMapping("/getall")
	@PreAuthorize("isAuthenticated()")
	public ApiResponse<List<Deposit>> __getAllDetails(@RequestHeader("Authorization") String token) {
		
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
	
	

}
