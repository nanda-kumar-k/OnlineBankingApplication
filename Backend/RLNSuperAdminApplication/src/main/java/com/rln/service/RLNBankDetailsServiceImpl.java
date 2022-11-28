package com.rln.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rln.model.RLNBankDetails;
import com.rln.repository.RLNBankDetailsRepository;

@Service
public class RLNBankDetailsServiceImpl implements RLNBankDetailsService {
	
	@Autowired
	private RLNBankDetailsRepository bankDetailsRepository;

	@Override
	public RLNBankDetails _getRLNBankInfo() {
		
		List<RLNBankDetails> bankDetails = (List<RLNBankDetails>) bankDetailsRepository.findAll();
		
		return bankDetails.get(0);
	}

	@Override
	public boolean _updateBalance(long balance, boolean incOrdes) {
		
		RLNBankDetails bankDetails = _getRLNBankInfo();
		
		if(incOrdes) {
			
			bankDetails.setBalance(bankDetails.getBalance() + balance);
			return true;
		}
		else  {
			
			bankDetails.setBalance(bankDetails.getBalance() - balance);
			
			return true;
		}
	}

}
