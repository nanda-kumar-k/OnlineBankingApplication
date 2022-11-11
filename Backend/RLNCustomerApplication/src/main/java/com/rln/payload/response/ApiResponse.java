package com.rln.payload.response;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ApiResponse < DataClassType > {
	
	private int statusCode;
	private Date timestamp;
	private String message;
	private String description;
	private DataClassType data;
	
	

}
