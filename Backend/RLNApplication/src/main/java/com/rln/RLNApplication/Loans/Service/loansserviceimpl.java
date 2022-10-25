package com.rln.RLNApplication.Loans.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rln.RLNApplication.Customer.Repository.CustomerRepository;
import com.rln.RLNApplication.Customer.Service.customerservice;
import com.rln.RLNApplication.Loans.Repository.LoansRepository;
@Service
public class loansserviceimpl  implements loansservice
{

	@Autowired
	 private LoansRepository lonsRepository;
}
