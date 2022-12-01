package com.rln.payload.response;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class JwtResponse {
	
	private String token;
	private String type = "Bearer";
	private String username;

	public JwtResponse(String jwt, String string) {
		this.token = jwt;
		this.username = string;
	}

	
  
}
