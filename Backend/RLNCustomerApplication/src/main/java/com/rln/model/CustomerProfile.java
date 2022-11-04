package com.rln.model;

import java.math.BigInteger;
import java.util.Date;
import java.util.UUID;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.data.annotation.CreatedDate;


@Entity
@Table
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
	@CreatedDate
	private Date created_date;
	
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "customer_id", referencedColumnName = "customer_id")
	private Customer customer_ref;
	

}
