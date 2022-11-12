package com.rln.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rln.model.Customer;
import com.rln.model.Transaction;
import com.rln.repository.TransactionRepository;

@Service
public class TransactionServiceImpl implements TransactionService {
	
	@Autowired
	private TransactionRepository transactionRepository;
	
	@Autowired
	private CustomerService customerService;

	@Override
	public boolean _customerAmountTransfer(Transaction transaction, String token) {
		
		Customer customer =  customerService._checkCustomerBalance(token);

		transaction.setCustomerRef(customer);;
		
		transactionRepository.save(transaction);
		
		return false;
	}

	@Override
	public List<Transaction> _customerTransactionsDetails(String token) {
		
		Customer customer =  customerService._checkCustomerBalance(token);
		System.out.println(customer.getCustomer_id());
		System.out.println(transactionRepository.findAll());
		List<Transaction> li = (List<Transaction>) transactionRepository.findAll();
		System.out.println(li.get(0).getCustomerId());
		List<Transaction> list = transactionRepository.findByCustomerId(customer.getCustomer_id());
		System.out.println(list);
		return list;
	}

}
