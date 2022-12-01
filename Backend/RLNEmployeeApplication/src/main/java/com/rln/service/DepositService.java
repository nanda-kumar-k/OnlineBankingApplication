package com.rln.service;

import java.util.List;

import com.rln.model.Deposit;

public interface DepositService {
	
	Deposit _specificDeposit(String depositid);
	
	List<Deposit> _getAllCustomersDeposits();
	
	List<Deposit> _customerDeposits(String username);
}
