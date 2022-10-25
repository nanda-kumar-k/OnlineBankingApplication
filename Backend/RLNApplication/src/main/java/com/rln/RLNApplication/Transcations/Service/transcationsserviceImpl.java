package com.rln.RLNApplication.Transcations.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rln.RLNApplication.Customer.Repository.CustomerRepository;
import com.rln.RLNApplication.Customer.Service.customerservice;
import com.rln.RLNApplication.Transcations.Model.Transcations;
import com.rln.RLNApplication.Transcations.Repository.TranscationRepository;

@Service
public class transcationsserviceImpl implements transcationsservice
{
	@Autowired
	 private TranscationRepository transcationRepository;
}
