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
	private UUID customer_id;
	private String gender;
	private Date dob;
	private String address;
	private boolean marital_status;
	private BigInteger aadhaar_number;
	private String pan_number;
	private String organisation_name;
	private String designation;
	private String nature_of_employment;
	private long annual_income;
	private String qualification;
	private String father_name;
	private Date father_dob;
	private String mother_name;
	private Date mother_dob;
	@Temporal(TemporalType.TIMESTAMP)
	@CreatedDate
	private Date created_date = new Date();
	
	
	@OneToOne(fetch = FetchType.LAZY)
	@MapsId
	@JoinColumn(name = "customer_id")
	private Customer customer_ref;
	
	
	
//	@Id
//	@GeneratedValue(strategy = GenerationType.AUTO)
//	@Type(type="uuid-char")
//	@Column(name="id", columnDefinition = "VARCHAR(255)", insertable = false, updatable = false, nullable = false)
//	private String id;
	
}
