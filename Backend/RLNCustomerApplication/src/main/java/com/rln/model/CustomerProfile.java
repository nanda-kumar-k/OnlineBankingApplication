package com.rln.model;

import java.math.BigInteger;
import java.util.Date;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.data.annotation.CreatedDate;

import lombok.Getter;
import lombok.Setter;


@Entity
@Table
@Setter
@Getter
public class CustomerProfile {
	
	@Id
	private UUID customerId;
	private String gender;
	private Date dob;
	private String address;
	private boolean maritalStatus;
	private BigInteger aadhaarNumber;
	private String panNumber;
	private String organisationName;
	private String designation;
	private String natureOfEmployment;
	private long annualIncome;
	private String qualification;
	private String fatherName;
	private Date fatherDob;
	private String motherName;
	private Date motherDob;
	@Temporal(TemporalType.TIMESTAMP)
	@CreatedDate
	private Date createdDate = new Date();
	
	
	@OneToOne(fetch = FetchType.LAZY)
	@MapsId
	@JoinColumn(name = "customer_id")
	private Customer customer;
	
	
	
//	@Id
//	@GeneratedValue(strategy = GenerationType.AUTO)
//	@Type(type="uuid-char")
//	@Column(name="id", columnDefinition = "VARCHAR(255)", insertable = false, updatable = false, nullable = false)
//	private String id;
	
}
