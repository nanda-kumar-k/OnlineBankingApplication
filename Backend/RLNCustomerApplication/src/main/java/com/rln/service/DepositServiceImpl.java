package com.rln.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rln.model.Customer;
import com.rln.model.Deposit;
import com.rln.model.RLNBankDetails;
import com.rln.model.Transaction;
import com.rln.repository.CustomerRepository;
import com.rln.repository.DepositRepository;

@Service
public class DepositServiceImpl implements DepositService {
	
	@Autowired
	private DepositRepository depositRepository;

	
	@Autowired
	private CustomerService customerService;
	
	
	@Autowired
	private CustomerRepository customerRepository;
	
	
	@Autowired
	private RLNBankDetailsService bankDetailsService;

	
	@Override
	public String _openNewCUstomerDeposit(Deposit deposit, String token) {
		
		Customer customer =  customerService._checkCustomerBalance(token);
		
		if ( customer.getBalance() - deposit.getDepositAmount() <= 100 && deposit.getDepositAmount() <= 0) {
			
			return " Insufficient Bank Balance To open new Fix Deposit...!!";
			
		}
		
//		SimpleDateFormat dateOnly = new SimpleDateFormat("MM/dd/yyyy");
		Date today = new Date();
//		String from = dateOnly.format(today);
//		String to = dateOnly.format(deposit.getDepositEndDate());
		if( today.compareTo(deposit.getDepositEndDate()) < 0  ) {
			
//			Period ti = Period.between(null, null);
			
			return " Invalid closing date of the deposit...!!! ";
		}
		
		else {
			
			RLNBankDetails bankDetails = bankDetailsService._getRLNBankInfo();
			
			
			if ( bankDetails != null ) {
				
				customer.setBalance( customer.getBalance() - deposit.getDepositAmount() );
				customerRepository.save(customer);
				
				deposit.setDepositId(UUID.randomUUID().toString());
				deposit.setDepositInterest(bankDetails.getDepositInterest());
				deposit.setCustomer(customer);
				deposit.setDepositeCurrentAmount(deposit.getDepositAmount());
				depositRepository.save(deposit);
				
				return "created";
				
			}
			else {
				
				return " Internal Server Error...!! try again after some time..!! ";
			}
				
		}
		
	}


	@Override
	public List<Deposit> _getAllDeposits(String token) {
		
		
		Customer customer =  customerService._checkCustomerBalance(token);

		List<Deposit> li = (List<Deposit>) depositRepository.findAll();
		
		List<Deposit> res = new ArrayList<>();
		
		for( int i = 0; i < li.size(); i++) {
			
			if( li.get(i).getCustomerrefid() == (customer.getCustomer_id()) ) {
				
				Deposit filter = li.get(i);
				filter.setCustomer(null);
	
				res.add(filter);
			}
		}
		
		return res;
	}
}
