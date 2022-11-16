package com.rln.payload.request;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class BusinessApiPaymentRequest {
	
	private String apiKey;
	private String authDomain;
	private double amount;
	private String redirectGetURL;
	private String purpose;

}
