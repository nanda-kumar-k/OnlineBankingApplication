package com.rln.payload.response;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class JwtResponse {
	
	private String token;
	private String type = "Bearer";
	private String username;

	public JwtResponse(String accessToken, String username) {
		this.token = accessToken;
		this.username = username;
	}
  
}
