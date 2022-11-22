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
	public String _openNewCUstomerDeposit(Deposit deposit, String token) {
		
		Customer customer =  customerService._checkCustomerBalance(token);
		
		if ( deposit.getDepositAmount() <= 500 ) {
			
			return "Minimum amount to fix is 500...!! please enter valid amount...!!";
			
		}
		
		if ( customer.getBalance() - deposit.getDepositAmount() <= 100 ) {
			
			return "Insufficient Bank Balance To open new Fix Deposit...!!";
			
		}

		LocalDate open = LocalDate.now();
		Period ti = Period.between(open ,new java.sql.Date(deposit.getDepositEndDate().getTime()).toLocalDate());
		
		int years = ti.getYears();
		int months = ti.getMonths();
		int numberOfMonthsBetweenDates =  months+years*12;
		System.out.println(years);
		System.out.println(months);
		System.out.println(numberOfMonthsBetweenDates);
		if( years < 1 && numberOfMonthsBetweenDates < 1  ) {
			
//			Period ti = Period.between(null, null);
			
			return "minimum 1 month should be fix the amount...!! Try again...!!";
		}
		
		else {
			
			RLNBankDetails bankDetails = bankDetailsService._getRLNBankInfo();
			
			
			if ( bankDetails != null ) {
				
				bankDetailsService._updateBalance((long)deposit.getDepositAmount(), true);
				
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


	@Override
	public boolean _closeDeposit(String depositid, String token) {
		
		Deposit deposit = depositRepository.findByDepositId(depositid);
		Customer customer =  customerService._checkCustomerBalance(token);
		
		if ( deposit != null ) {
			
//			LocalDate start = LocalDate.parse((CharSequence) deposit.getDepositDate());
			LocalDate end = LocalDate.now();
			Period ti = Period.between(new java.sql.Date(deposit.getDepositEndDate().getTime()).toLocalDate(), end);
//			System.out.println(end);
//			System.out.println(new java.sql.Date(deposit.getDepositEndDate().getTime()).toLocalDate());
//			System.out.println(ti.getMonths());
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
			
//			System.out.println(years);
//			System.out.println(months);
//			System.out.println(numberOfMonthsBetweenDates);
//			System.out.println(t);
//			System.out.println(r);
			double amount = calculateCompoundAmount(deposit.getDepositAmount(), t, r, 3);
			System.out.println(amount);
			
			deposit.setDepositeCurrentAmount(amount);
			deposit.setDepositeActiveStatus(false);
			depositRepository.save(deposit);
			
			customer.setBalance((customer.getBalance() + amount));
			
			customerRepository.save(customer);
			
			return true;
			
		}
		
		return false;
	}
}
