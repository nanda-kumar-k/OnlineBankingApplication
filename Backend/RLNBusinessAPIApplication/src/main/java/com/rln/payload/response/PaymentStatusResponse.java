package com.rln.payload.response;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;


@Setter
@Getter
public class PaymentStatusResponse {
	
	private int statusCode;
	private Date timestamp;
	private String message;
	private String description;
	private boolean paymentStatus;
	private String paymentRequestId;
	private String paymentId;
	private String clientUsername;
	private double amount;

}
