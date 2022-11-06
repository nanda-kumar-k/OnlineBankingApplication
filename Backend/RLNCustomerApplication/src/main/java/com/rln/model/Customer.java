package com.rln.model;

import java.math.BigInteger;
import java.util.Date;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.annotation.CreatedDate;


@Entity
@Table
public class Customer {
	
	
	@Id
	@GeneratedValue(generator = "uuid2")
	@GenericGenerator(name = "uuid2", strategy = "uuid2")
	@Column(columnDefinition = "BINARY(16)", insertable = false, updatable = false, nullable = false)
	private UUID customer_id;
	@Column(nullable = false, unique = true)
	private long account_number;
	@Column(nullable = false, unique = true)
	private String username;
	@Column(nullable = false)
	private String first_name;
	@Column(nullable = false)
	private String last_name;
	@Column(nullable = false)
	private long contact_number;
	@Column(nullable = false)
	private String email_id;
	@Column(nullable = false)
	private String password;
	@Column(nullable = false)
	private String account_type;
	@Column(nullable = false)
	@Value("${some.key:25000}")
	private BigInteger balance;
	@Column(nullable = false)
	@Value("${some.key:false}")
	private boolean verification_status;
	@Column(nullable = false)
	@CreatedDate
	private Date created_date;
	
	
	
	public UUID getCustomer_id() {
		return customer_id;
	}
	public void setCustomer_id(UUID customer_id) {
		this.customer_id = customer_id;
	}
	public long getAccount_number() {
		return account_number;
	}
	public void setAccount_number(long account_number) {
		this.account_number = account_number;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getFirst_name() {
		return first_name;
	}
	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}
	public String getLast_name() {
		return last_name;
	}
	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}
	public long getContact_number() {
		return contact_number;
	}
	public void setContact_number(long contact_number) {
		this.contact_number = contact_number;
	}
	public String getEmail_id() {
		return email_id;
	}
	public void setEmail_id(String email_id) {
		this.email_id = email_id;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getAccount_type() {
		return account_type;
	}
	public void setAccount_type(String account_type) {
		this.account_type = account_type;
	}
	public BigInteger getBalance() {
		return balance;
	}
	public void setBalance(BigInteger balance) {
		this.balance = balance;
	}
	public boolean isVerification_status() {
		return verification_status;
	}
	public void setVerification_status(boolean verification_status) {
		this.verification_status = verification_status;
	}
	public Date getCreated_date() {
		return created_date;
	}
	public void setCreated_date(Date created_date) {
		this.created_date = created_date;
	}

}
