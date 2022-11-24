package com.rln.service;

import java.math.BigInteger;
import java.time.LocalDate;
import java.time.Period;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.rln.model.Customer;
import com.rln.model.EducationalLoan;
import com.rln.model.HomeLoan;
import com.rln.model.LoanInterestPayment;
import com.rln.model.RLNBankDetails;
import com.rln.payload.response.ApiResponse;
import com.rln.payload.response.LoansResponse;
import com.rln.repository.EducationalLoanRepository;
import com.rln.repository.LoanInterestPaymentRepository;
import com.rln.repository.HomeLoanRepository;

@Service
public class LoanServiceImpl implements LoanService {
	
	@Autowired
	private HomeLoanRepository homeLoanRepository;
	
	@Autowired
	private LoanInterestPaymentRepository loanInterestPaymentRepository;
	
	
	@Autowired
	private EducationalLoanRepository educationalRepository;
	

	@Autowired
	private CustomerService customerService;
	
	@Autowired
	private RLNBankDetailsService bankDetailsService;
	
	@Autowired
	private FilesStorageService filesStorageService;
	
	@Override
	public ApiResponse<String> _openNewHomeLoan(HomeLoan homeLoan , String token) {
		
		ApiResponse<String> res = new ApiResponse<>();
		res.setTimestamp(new Date());
		
		LocalDate open = LocalDate.now();
		Period ti = Period.between(open ,new java.sql.Date(homeLoan.getLoanEndDate().getTime()).toLocalDate());
		
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
			
			Random random = new Random();
			BigInteger bigInteger = BigInteger.valueOf(Math.round(random.nextFloat() * Math.pow(10,8)));
			String loanId = bigInteger.toString();
			
			if ( loanId.length() < 8 ) {
				_openNewHomeLoan( homeLoan , token);
			}
			
			homeLoan.setCustomer(customer);
			homeLoan.setHomeLoanId(loanId);
			homeLoan.setLoanPendingAmount(homeLoan.getLoanAmount());
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
		
		LocalDate open = LocalDate.now();
		Period ti = Period.between(open, new java.sql.Date(educationalLoan.getLoanEndDate().getTime()).toLocalDate());
		
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
			
			Random random = new Random();
			BigInteger bigInteger = BigInteger.valueOf(Math.round(random.nextFloat() * Math.pow(10,8)));
			String loanId = bigInteger.toString();
			
			if ( loanId.length() < 8 ) {
				_openNewEducationaLoan( educationalLoan , token);
			}
			
			educationalLoan.setCustomer(customer);
			educationalLoan.setEducationalLoanId(loanId);
			educationalLoan.setLoanPendingAmount(educationalLoan.getLoanAmount());
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
	public String _uploadLoanDocuments(MultipartFile file, String loanid) {
		
		System.out.println(file);
		System.out.println("3333333333333333");
		HomeLoan homeLoan = homeLoanRepository.findByHomeLoanId(loanid);
		EducationalLoan educationalLoan = educationalRepository.findByEducationalLoanId(loanid);
		System.out.println("4444444444444444");
		if( homeLoan != null ) {
			try {
				
				String url = filesStorageService.save(file);
				
				if(url.equals("failed")) {
					
					return "Could not upload the file...!! Try again";
					
				}
				else {
					
					homeLoan.setDocumentUrl(url);
					homeLoanRepository.save(homeLoan);
					return "uploaded";
					
				}
				
			}
			catch(Exception e) {
				
				return "Could not upload the file...!! Try again";
				
			}
		}
		
		else if( educationalLoan != null ) {
				
			try {
				
				String url = filesStorageService.save(file);
				
				if(url.equals("failed")) {
					
					return "Could not upload the file...!! Try again";
					
				}
				else {
					
					educationalLoan.setDocumentUrl(url);
					educationalRepository.save(educationalLoan);
					return "uploaded";
					
				}
				
			}
			catch(Exception e) {
				
				return "Could not upload the file...!! Try again";
				
			}
			
		}
		
		else {
			
			return "Loan Id Not found...!!! Contact nearest RLN Bank...!!";
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
	public LoansResponse _specificLoan(String loanid) {
		
		HomeLoan homeLoan = homeLoanRepository.findByHomeLoanId(loanid);
		EducationalLoan educationalLoan = educationalRepository.findByEducationalLoanId(loanid);
		LoansResponse res = new LoansResponse();
		
		if ( homeLoan != null ) {
			
			if ( homeLoan.getLoanPendingAmount() <= 0 ) {
				
				List<HomeLoan> lis = new ArrayList<>();
				lis.add(homeLoan);
				res.setHomeloans(lis);
				
				return res;
			}
			else {
				return null;
			}
			
		}
		else if ( educationalLoan != null ) {
			
			if ( educationalLoan.getLoanPendingAmount() <= 0 ) {
				
				List<EducationalLoan> lis = new ArrayList<>();
				lis.add(educationalLoan);
				res.setEducationalLoans(lis);
				return res;
			}
			
			else  {
				
				return null;
			}
			 
		}
		else  {
			
			return null;
		}
		
	}
	
	@Override
	public String _closeLoan(String loanid) {
		
		HomeLoan homeLoan = homeLoanRepository.findByHomeLoanId(loanid);
		EducationalLoan educationalLoan = educationalRepository.findByEducationalLoanId(loanid);
		
		if ( homeLoan != null ) {
			
			if ( homeLoan.getLoanPendingAmount() <= 0 ) {
				
				homeLoan.setLoanStatus(false);
				homeLoanRepository.save(homeLoan);
				
				return "closed";
			}
			else {
				return "Loan Can't close...!! Please clear all balance before closing the loan...!!";
			}
			
		}
		else if ( educationalLoan != null ) {
			
			if ( educationalLoan.getLoanPendingAmount() <= 0 ) {
				
				educationalLoan.setLoanStatus(false);
				educationalRepository.save(educationalLoan);
				
				return "closed";
			}
			
			else  {
				
				return "Loan Can't close...!! Please clear all balance before closing the loan...!!";
			}
			 
		}
		else  {
			
			return "Loan Cannot be close, please contact near RLN Bank...!!";
		}
		
	}

	@Override
	public String _loanPayment(LoanInterestPayment interestPayment, String token) {
		
		Customer customer =  customerService._checkCustomerBalance(token);
		HomeLoan homeLoan = homeLoanRepository.findByHomeLoanId(interestPayment.getLoanId());
		EducationalLoan educationalLoan = educationalRepository.findByEducationalLoanId(interestPayment.getLoanId());
		
		if ( customer.getBalance() - interestPayment.getAmountPaid() <=100 ) { 
		
			return "Balance Insufficient to pay...!! Check your balance..!!";
			
		}
		
		boolean find = false;
		
		if ( homeLoan != null ) {
			
			if( homeLoan.isLoanVerification() ) {
				
				if ( interestPayment.getAmountPaid() <= homeLoan.getLoanPendingAmount()  ) {
					
					homeLoan.setLoanPendingAmount(homeLoan.getLoanPendingAmount() - interestPayment.getAmountPaid());
					homeLoanRepository.save(homeLoan);
					
					find = true;
				}
				else {
					
					return "Check amount once....!! it's more than your loan amount...!!";
				}
				
					
			}
			else {
				
				return " Loan verification is pending, please contract nearest RLN Bank...!! ";
			}
			
		}
		else if ( educationalLoan != null ) {
			
			if ( educationalLoan.isLoanVerification() ) {
				
				if( interestPayment.getAmountPaid() <= educationalLoan.getLoanPendingAmount()  ) {
					
					educationalLoan.setLoanPendingAmount(educationalLoan.getLoanPendingAmount() - interestPayment.getAmountPaid());
					educationalRepository.save(educationalLoan);
					
					find = true;
				}
				else {
					
					return "Check amount once....!! it's more than your loan amount...!!";
				}
			}
			else {
				
				return " Loan verification is pending, please contract nearest RLN Bank...!! ";
			}
			
		}
		
		if ( find ) {
			
			bankDetailsService._updateBalance(interestPayment.getAmountPaid(), true);
			
			interestPayment.setStatus(true);
			interestPayment.setLoanPaymentId(UUID.randomUUID().toString());
			interestPayment.setCustomer(customer);
			loanInterestPaymentRepository.save(interestPayment);
			
			return "paid";			
			
		}
		else {
			
			return "Loan Id Is Wrong...!! Please Try again..!!";
		}
		
	}

	@Override
	public List<LoanInterestPayment> _allLoanPayemnts(String token) {
		
		Customer customer = customerService._checkCustomerBalance(token);
		List<LoanInterestPayment> interestPayments = (List<LoanInterestPayment>)
				loanInterestPaymentRepository.findAll();
		
		List<LoanInterestPayment> res = new ArrayList<>();
		
		for ( int i = 0; i < interestPayments.size(); i++ ) {
			
			if ( customer.getCustomer_id() == interestPayments.get(i).getCustomerrefid() ) {
				
				res.add(interestPayments.get(i));
			}
		}
		
		
		return res;
	}

	

}
