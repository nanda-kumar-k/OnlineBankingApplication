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

import com.rln.model.Transaction;
import com.rln.payload.response.ApiResponse;
import com.rln.service.TransactionService;



//@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("/api/customer/transactions")
public class TransactionController {
	
	
	@Autowired
	public TransactionService transactionService;
	
	
	
	@PostMapping("/transferamount")
	@PreAuthorize("isAuthenticated()")
	public ApiResponse<String> __customerAmountTransfer(
			@RequestBody Transaction transaction , @RequestHeader("Authorization") String token){
		
		ApiResponse<String> res = new ApiResponse<>();
		
		res.setTimestamp(new Date());
		
		String status = transactionService._customerAmountTransfer(transaction, token);
		
		if( status.equals("success") ) {
			
			res.setMessage("Transaction successfull");
			res.setStatusCode(200);
			
		}
		else {
			res.setMessage(status);
			res.setStatusCode(401);
		}
		
		return res;
		
	}
	
	
	@GetMapping("/details")
	@PreAuthorize("isAuthenticated()")
	public ApiResponse<List<Transaction>> __customerTransactionsDetails(
			@RequestHeader("Authorization") String token) {
		
		ApiResponse<List<Transaction>> res = new ApiResponse<>();
		
		res.setTimestamp(new Date());
		
		List<Transaction> datares = transactionService._customerTransactionsDetails(token);
		
		if(datares.size() >0) {
			
			res.setData(datares);
			res.setMessage("Data Found...!!");
			res.setStatusCode(200);
		}
		
		else {
			
			res.setMessage("No Transaction Found..!!!");
			res.setStatusCode(204);
		}
		
		return res;
	}

}
