package com.rln.service;

import java.util.List;

import com.rln.model.Transaction;

public interface TransactionService {
	
	boolean _customerAmountTransfer(Transaction transaction, String token);
	
	List<Transaction> _customerTransactionsDetails(String token);

}
