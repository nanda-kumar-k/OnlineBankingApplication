package com.rln.model;

import java.util.Date;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.springframework.data.annotation.CreatedDate;

@Entity
@Table

public class RLNBankDetails {
	
	@Id
	@GeneratedValue(generator = "uuid2")
	@GenericGenerator(name = "uuid2", strategy = "uuid2")
	@Column(columnDefinition = "BINARY(16)", insertable = false, updatable = false, nullable = false)
	private UUID rln_id;
	@Column(nullable = false)
	private long balance; 
	@Column(nullable = false)
	private float home_loan_interest;
	@Column(nullable = false)
	private float education_loan_interest;
	@Column(nullable = false)
	private float deposit_interest;
	@Column(nullable = false)
	private long insurance_montly_payment;
	@Column(nullable = false)
	private long insurance_yearly_payment;
	@Column(nullable = false)
	@CreatedDate
	private Date date;

}
