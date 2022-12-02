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

import com.rln.model.Transaction;
import com.rln.payload.response.ApiResponse;
import com.rln.service.TransactionService;



//@CrossOrigin(origins = "http://localhost:3010", maxAge = 3600)
@RestController
@RequestMapping("/api/superadmin/transactions")
public class TransactionController {
	
	
	@Autowired
	public TransactionService transactionService;
	
	
	
	@GetMapping("/customertransactions/{username}")
	@PreAuthorize("isAuthenticated()")
	public ApiResponse<List<Transaction>> __customerTransactionsDetails(
			@PathVariable("username") String username) {
		
		ApiResponse<List<Transaction>> res = new ApiResponse<>();
		
		res.setTimestamp(new Date());
		
		List<Transaction> datares = transactionService._customerTransactionsDetails(username);
		
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
	
	@GetMapping("/alltransactions")
	@PreAuthorize("isAuthenticated()")
	public ApiResponse<List<Transaction>> __getAllTransactionsDetails() {
		
		ApiResponse<List<Transaction>> res = new ApiResponse<>();
		
		res.setTimestamp(new Date());
		
		List<Transaction> datares = transactionService._getAllTransactionsDetails();
		
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
