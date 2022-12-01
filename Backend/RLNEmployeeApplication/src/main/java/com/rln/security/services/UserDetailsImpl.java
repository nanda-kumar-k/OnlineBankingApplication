package com.rln.security.services;

import java.util.Collection;
import java.util.Objects;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.rln.model.Employee;

public class UserDetailsImpl implements UserDetails {
  private static final long serialVersionUID = 1L;
  
  private long employeeTableId;
  
  private String username;

  @JsonIgnore
  private String password;
  

  private Collection<? extends GrantedAuthority> authorities;

  public UserDetailsImpl(String username, String password ) {
//	  this.customer_id = customer_id;
    this.username = username;
    this.password = password;
//    this.authorities = authorities;
  }
  

  public static UserDetailsImpl build(Employee user) {
//    List<GrantedAuthority> authorities = user.getCustomerType().stream()
//        .map(role -> new SimpleGrantedAuthority(role.getName().name()))
//        .collect(Collectors.toList());

    return new UserDetailsImpl(
        user.getUsername(), 
        user.getPassword()
//        user.getCustomer_id()
//        authorities);
        );
  }

  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
    return authorities;
  }




  @Override
  public String getPassword() {
    return password;
  }

  @Override
  public String getUsername() {
    return username;
  }

  @Override
  public boolean isAccountNonExpired() {
    return true;
  }

  @Override
  public boolean isAccountNonLocked() {
    return true;
  }

  @Override
  public boolean isCredentialsNonExpired() {
    return true;
  }

  @Override
  public boolean isEnabled() {
    return true;
  }


public long getEmployeeTableId() {
	return employeeTableId;
}


public void setEmployeeTableId(long employeeTableId) {
	this.employeeTableId = employeeTableId;
}


  @Override
  public boolean equals(Object o) {
    if (this == o)
      return true;
    if (o == null || getClass() != o.getClass())
     return false;
    UserDetailsImpl user = (UserDetailsImpl) o;
    return Objects.equals(employeeTableId, user.employeeTableId);
  }

}
