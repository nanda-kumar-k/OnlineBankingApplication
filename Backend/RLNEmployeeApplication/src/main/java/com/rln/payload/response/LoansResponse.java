package com.rln.payload.response;

import java.util.List;

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
public class LoansResponse {
	
	private List<HomeLoan> homeloans;
	
	private List<EducationalLoan> educationalLoans;

}
