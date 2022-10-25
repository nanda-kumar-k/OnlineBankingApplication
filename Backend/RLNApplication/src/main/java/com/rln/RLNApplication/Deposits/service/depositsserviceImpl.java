package com.rln.RLNApplication.Deposits.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rln.RLNApplication.Customer.Repository.CustomerRepository;
import com.rln.RLNApplication.Deposits.Repository.DepositsRepository;

@Service
public class depositsserviceImpl implements depositsservice
{
	@Autowired
	 private DepositsRepository depositsRepository;
}
