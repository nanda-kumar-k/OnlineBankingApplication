package com.rln.payload.response;

import lombok.Data;

@Data
public class ApiPaymentDetailsResponse {
	
	private double amount;
	private String username;
	private String accountNumber;
	private String purpose;
	

}
