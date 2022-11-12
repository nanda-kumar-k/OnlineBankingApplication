package com.rln.controller;

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



@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("/api/customer/transactions")
public class TransactionController {
	
	@Autowired
	public TransactionService transactionService;
	
	
	
	@PostMapping("/transferamount")
	@PreAuthorize("isAuthenticated()")
	public ApiResponse<String> __customerAmountTransfer(@RequestBody Transaction transaction , @RequestHeader("Authorization") String token){
		transactionService._customerAmountTransfer(transaction, token);
		return null;
		
	}
	
	
	@GetMapping("/details")
	@PreAuthorize("isAuthenticated()")
	public List<Transaction> __customerTransactionsDetails(@RequestHeader("Authorization") String token) {
		
		List<Transaction> res = transactionService._customerTransactionsDetails(token);
		
		return res;
	}

}
