package com.rln.service;

import com.rln.model.RLNBankDetails;

public interface RLNBankDetailsService {
	
	RLNBankDetails _getRLNBankInfo();
	
	boolean _updateBalance(long balance , boolean incOrdes );

}
