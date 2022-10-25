package com.rln.RLNApplication.Loans.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.rln.RLNApplication.Loans.Service.loansservice;

@Controller
public class ClientController
{

	@Autowired
	 private 	loansservice LoansService;
}
