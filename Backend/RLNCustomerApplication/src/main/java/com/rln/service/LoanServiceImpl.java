package com.rln.service;

import java.time.LocalDate;
import java.time.Period;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rln.model.Customer;
import com.rln.model.EducationalLoan;
import com.rln.model.HomeLoan;
import com.rln.model.RLNBankDetails;
import com.rln.payload.response.ApiResponse;
import com.rln.payload.response.LoansResponse;
import com.rln.repository.EducationalLoanInterestPaymentRepository;
import com.rln.repository.EducationalLoanRepository;
import com.rln.repository.HomeLoanInterestPaymentRepository;
import com.rln.repository.HomeLoanRepository;

@Service
public class LoanServiceImpl implements LoanService {
	
	@Autowired
	private HomeLoanRepository homeLoanRepository;
	
	@Autowired
	private HomeLoanInterestPaymentRepository homeLoanInterestPaymentRepository;
	
	
	@Autowired
	private EducationalLoanRepository educationalRepository;
	
	@Autowired
	private EducationalLoanInterestPaymentRepository educationalLoanInterestPaymentRepository;

	@Autowired
	private CustomerService customerService;
	
	@Autowired
	private RLNBankDetailsService bankDetailsService;
	
	@Override
	public ApiResponse<String> _openNewHomeLoan(HomeLoan homeLoan , String token) {
		
		ApiResponse<String> res = new ApiResponse<>();
		res.setTimestamp(new Date());
		
		LocalDate end = LocalDate.now();
		Period ti = Period.between(new java.sql.Date(homeLoan.getLoanEndDate().getTime()).toLocalDate(), end);
		
		int years = ti.getYears();
		int months = ti.getMonths();
		int numberOfMonthsBetweenDates =  months+years*12;
		
		if( years < 1 && numberOfMonthsBetweenDates <= 3 )  {
			
			res.setStatusCode(204);
			res.setMessage("Closing date of the loan should be greater than 3 months...!! ");
			return res;
			
		}
		if ( homeLoan.getLoanAmount() <= 10000.00 ) {
			
			res.setStatusCode(204);
			res.setMessage("Home Loan Amount must be greater than 10,000.00 ");
			return res;
		}
		
		
		RLNBankDetails bankDetails = bankDetailsService._getRLNBankInfo();
		
		if ( bankDetails != null ) {
			
			Customer customer = customerService._checkCustomerBalance(token);
			String loanId = UUID.randomUUID().toString();
			
			homeLoan.setCustomer(customer);
			homeLoan.setHomeLoanId(loanId);
			homeLoan.setLoanInterest(bankDetails.getHomeLoanInterest());
			homeLoanRepository.save(homeLoan);
			
			res.setData(loanId);
			res.setMessage("Loan opened successfully...!!");
			res.setStatusCode(200);
			
			
			return res;
		}
		else {
			
			res.setStatusCode(500);
			res.setMessage("Internal Server Error...!! try again after some time..!!");
			return res;
			
		}
		
	}

	@Override
	public ApiResponse<String> _openNewEducationaLoan(EducationalLoan educationalLoan, String token) {
		
		ApiResponse<String> res = new ApiResponse<>();
		res.setTimestamp(new Date());
		
		LocalDate end = LocalDate.now();
		Period ti = Period.between(new java.sql.Date(educationalLoan.getLoanEndDate().getTime()).toLocalDate(), end);
		
		int years = ti.getYears();
		int months = ti.getMonths();
		int numberOfMonthsBetweenDates =  months+years*12;
		
		if( years < 1 && numberOfMonthsBetweenDates <= 3 )  {
			
			res.setStatusCode(204);
			res.setMessage("Closing date of the loan should be greater than 3 months...!! ");
			return res;
			
		}
		if ( educationalLoan.getLoanAmount() <= 10000.00 ) {
			
			res.setStatusCode(204);
			res.setMessage("Educational Loan Amount must be greater than 10,000.00 ");
			return res;
		}
		
		
		RLNBankDetails bankDetails = bankDetailsService._getRLNBankInfo();
		
		if ( bankDetails != null ) {
			
			Customer customer = customerService._checkCustomerBalance(token);
			String loanId = UUID.randomUUID().toString();
			
			educationalLoan.setCustomer(customer);
			educationalLoan.setEducationalLoanId(loanId);
			educationalLoan.setLoanInterest(bankDetails.getEducationLoanInterest());
			educationalRepository.save(educationalLoan);
			
			res.setData(loanId);
			res.setMessage("Loan opened successfully...!!");
			res.setStatusCode(200);
			
			return res;
		}
		else {
			
			res.setStatusCode(500);
			res.setMessage("Internal Server Error...!! try again after some time..!!");
			return res;
			
		}
		
		
	}

	@Override
	public LoansResponse _getAllLoans(String token) {
		
		Customer customer =  customerService._checkCustomerBalance(token);
		
		List<HomeLoan> homeLoans = (List<HomeLoan>) homeLoanRepository.findAll();
		List<EducationalLoan> educationalLoans = (List<EducationalLoan>) educationalRepository.findAll();
		
		List<HomeLoan> hres = new ArrayList<>();
		List<EducationalLoan> eres = new ArrayList<>();
		
		int size = 0;
		
		if( homeLoans.size() >= educationalLoans.size() ) {
			size = homeLoans.size();
		}
		else {
			size = educationalLoans.size();
		}
		
		for ( int i = 0; i < size; i++) {
			
			if ( i < homeLoans.size() ) {
				
				if ( homeLoans.get(i).getCustomerrefid() == customer.getCustomer_id() ) {
					
					HomeLoan hfilter = homeLoans.get(i);
					hfilter.setCustomer(null);
					
					hres.add(hfilter);
				}
				
			}
			if ( i < educationalLoans.size() ) {
				
				if ( educationalLoans.get(i).getCustomerrefid() == customer.getCustomer_id() ) {
					
					EducationalLoan efilter = educationalLoans.get(i);
					efilter.setCustomer(null);
					
					eres.add(efilter);
				}
				
			}
		}
		
		LoansResponse loansResponse = new LoansResponse();
		
		loansResponse.setEducationalLoans(educationalLoans);
		loansResponse.setHomeloans(homeLoans);
		
		return loansResponse;
	}

	
	@Override
	public String _closeLoan(String loanid, String token) {
		
		Customer customer =  customerService._checkCustomerBalance(token);
		
		
		return null;
	}

}
