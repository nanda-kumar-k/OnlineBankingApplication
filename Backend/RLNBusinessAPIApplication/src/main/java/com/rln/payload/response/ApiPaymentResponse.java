package com.rln.payload.response;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class ApiPaymentResponse < DataClassType > {
	
	private int statusCode;
	private Date timestamp;
	private String message;
	private String description;
	private DataClassType data;
	private String purpose;
}
