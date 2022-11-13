package com.rln.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.UUID;

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
		transaction.setTransactionId(UUID.randomUUID().toString());
		transactionRepository.save(transaction);  
		
		if(Objects.nonNull(transaction.getAmountTransfer())) {
			
			if(customer.getBalance() - transaction.getAmountTransfer() <= 100) {
				
				return "Transaction Failed...!! ( Insufficient Bank Balance ).";
			}
			else {
				
				customer.setBalance(customer.getBalance() - transaction.getAmountTransfer());
				reciever.get().setBalance(reciever.get().getBalance() + transaction.getAmountTransfer());
				transaction.setTransactionStatus(true);
				customerService._createOrUpdateCustomer(customer);
				customerService._createOrUpdateCustomer(reciever.get());
				transactionRepository.save(transaction);
				return "Done";
			}
			
		}
		else {
			
			return "Transaction Failed...!!";
		}
		
		

	
	}

	
	@Override
	public List<Transaction> _customerTransactionsDetails(String token) {
		Customer customer =  customerService._checkCustomerBalance(token);

		List<Transaction> li = (List<Transaction>) transactionRepository.findAll();
		
		List<Transaction> res = new ArrayList<>();
		
		for( int i = 0; i < li.size(); i++) {
			
			if( li.get(i).getCustomerrefid() == (customer.getCustomer_id()) ) {
				
				res.add(li.get(i));
			}
		}
		
		return res;
	}

}
