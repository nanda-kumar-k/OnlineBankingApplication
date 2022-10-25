package com.rln.RLNApplication.Deposits.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.rln.RLNApplication.Deposits.service.depositsservice;

@Controller
public class ClientController
{

	@Autowired
	 private   depositsservice DepositsService;  	
}
