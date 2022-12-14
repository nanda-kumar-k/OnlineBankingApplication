package com.rln.payload.response;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;


@Setter
@Getter
public class ApiPaymentUrlResponse {
	
	private int statusCode;
	private Date timestamp;
	private String message;
	private String paymentURL;
	private String description;


}
