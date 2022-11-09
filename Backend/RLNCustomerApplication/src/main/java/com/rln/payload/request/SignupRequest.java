package com.rln.payload.request;

import java.util.Set;

import javax.validation.constraints.*;

public class SignupRequest {
  @NotBlank
  @Size(min = 3, max = 20)
  private String username;

  @NotBlank
  @Size(max = 50)
  @Email
  private String email;

  private Set<String> role;

  @NotBlank
  @Size(min = 6, max = 40)
  private String password;
  
  @NotBlank
  @Size(max = 120)
  private String age;
  
  @NotBlank
  @Size(max = 120)
  private String dob;

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public Set<String> getRole() {
    return this.role;
  }

  public void setRole(Set<String> role) {
    this.role = role;
  }

public String getAge() {
	return age;
}

public void setAge(String age) {
	this.age = age;
}

public String getDob() {
	return dob;
}

public void setDob(String dob) {
	this.dob = dob;
}
}
