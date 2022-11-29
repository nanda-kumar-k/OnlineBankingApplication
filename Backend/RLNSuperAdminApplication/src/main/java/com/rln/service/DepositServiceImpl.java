package com.rln.service;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.Period;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rln.model.Customer;
import com.rln.model.Deposit;
import com.rln.model.RLNBankDetails;
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

	
	public double calculateCompoundAmount(double p, double t, double r, int n) {
        double amount = p * Math.pow(1 + (r / n), n * t);
//        System.out.println("Compound Interest after " + t + " years: "+cinterest);
//        System.out.println("Amount after " + t + " years: "+amount);
        
        return amount;
    }
	
	public double calculateCompoundInterest(double p, double t, double r, int n) {
		double amount = p * Math.pow(1 + (r / n), n * t);
        double cinterest = amount - p;
        
        return cinterest;
	}

	@Override
	public Deposit _specificDeposit(String depositid) {
		
		Deposit deposit = depositRepository.findByDepositId(depositid);
		
		if ( deposit != null ) {
			
			LocalDate end = LocalDate.now();
			Period ti = Period.between(new java.sql.Date(deposit.getDepositEndDate().getTime()).toLocalDate(), end);

			int years = ti.getYears();
			int months = ti.getMonths();
			int numberOfMonthsBetweenDates =  months+years*12;
			double t;
			
			if(numberOfMonthsBetweenDates <= 12) {
				t = (Double.valueOf(numberOfMonthsBetweenDates)) / 12.00 ;
			}
			else {
				t = (Double.valueOf(years)) ;
			}
			
			double r = Double.valueOf(deposit.getDepositInterest()) / 100.0;
			double amount = calculateCompoundAmount(deposit.getDepositAmount(), t, r, 3);

			
			deposit.setDepositeCurrentAmount(amount);
					
			return deposit;
			
		}
		else {
			return null;
		}
		
	}
	
	
	@Override
	public List<Deposit> _customerDeposits(String username) {
		
		Customer customer = customerRepository.findByUsername(username).get();
		
		if ( customer != null ) {
			
			List<Deposit> res = new ArrayList<>();
			List<Deposit> deposits = (List<Deposit>) depositRepository.findAll();
			
			for ( int i = 0; i < deposits.size(); i++ ) {
				
				if ( deposits.get(i).getCustomerrefid() == customer.getCustomer_id() ) {
					
					res.add(deposits.get(i));
				}
			}
			
			return res;
			
		}
		
		return null;
	}

	@Override
	public List<Deposit> _getAllCustomersDeposits() {
		
		List<Deposit> deposits = (List<Deposit>) depositRepository.findAll();
		
		return deposits;
	}
	
	
}
