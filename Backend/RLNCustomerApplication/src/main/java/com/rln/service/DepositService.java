package com.rln.service;

import java.util.List;

import com.rln.model.Deposit;

public interface DepositService {
	
	String _openNewCUstomerDeposit( Deposit deposit , String token );
	
	List<Deposit> _getAllDeposits( String token );
	
	boolean _closeDeposit( String depositid , String token);
}
