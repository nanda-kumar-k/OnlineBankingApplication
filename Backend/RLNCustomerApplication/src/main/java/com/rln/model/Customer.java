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
	@Value("${some.key:true}")
	private boolean verification_status;
	@Column(nullable = false)
	@CreatedDate
	private Date created_date;

}
