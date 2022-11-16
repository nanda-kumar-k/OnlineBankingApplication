package com.rln.payload.request;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class CustomerAuthentication {
	
	private String username;
	private String password;
}
