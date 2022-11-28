package com.rln.payload.response;

import com.rln.model.EducationalLoan;
import com.rln.model.HomeLoan;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;



@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class SpecificLoanResponse {
	
	private HomeLoan homeloans;
	
	private EducationalLoan educationalLoans;

}
