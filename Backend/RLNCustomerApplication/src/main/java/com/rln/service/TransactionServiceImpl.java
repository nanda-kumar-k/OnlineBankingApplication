package com.rln.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rln.model.Customer;
import com.rln.model.Transaction;
import com.rln.repository.CustomerRepository;
import com.rln.repository.TransactionRepository;

@Service
public class TransactionServiceImpl implements TransactionService {
	
	@Autowired
	private TransactionRepository transactionRepository;
	
	@Autowired
	private CustomerService customerService;
	
	
	@Autowired
	private CustomerRepository customerRepository;


	public String _customerAmountTransfer(Transaction transaction, String token) {
		
		Optional<Customer> reciever = customerService._getCustomerDetailsByAccountNumber(transaction.getRecieverAccountNumber());
		System.out.println("ttttttttt");
		if(reciever.isEmpty()) {
			
			return "Transaction Failed...!! ( Invalid Account Number ) Try again...!";
		}
		
		Customer customer =  customerService._checkCustomerBalance(token);
		
		transaction.setCustomer(customer);
		transaction.setSenderAccountNumber(customer.getAccountNumber());
		transaction.setSenderName(customer.getFirstName() + customer.getLastName());
		Transaction tr =  transactionRepository.save(transaction);  
		
		
		Customer customr =  customerService._checkCustomerBalance(token);
		
		transaction.setCustomer(customer);
		transaction.setSenderAccountNumber(customer.getAccountNumber());
		transaction.setSenderName("kumarrrrrrrrrrr");
		transactionRepository.save(transaction);  
		
//		transactionRepository.createCustomerTransaction(0, token, token, token, token, customer.getCustomer_id());
		
		return "";

	
	}

	
	@Override
	public List<Transaction> _customerTransactionsDetails(String token) {
		Customer customer =  customerService._checkCustomerBalance(token);

		List<Transaction> li = (List<Transaction>) transactionRepository.findAll();
		
		List<Transaction> res = new ArrayList<>();
		
		for( int i = 0; i < li.size(); i++) {
			
			if( li.get(0).getCustomerrefid().equals(customer.getCustomer_id()) ) {
				
				res.add(li.get(i));
			}
		}
		
		return res;
	}

}
