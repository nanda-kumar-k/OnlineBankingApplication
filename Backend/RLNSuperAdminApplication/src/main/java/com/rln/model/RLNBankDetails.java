package com.rln.model;

import java.util.Date;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.GenericGenerator;
import org.springframework.data.annotation.CreatedDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
 
@Entity
@Table
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class RLNBankDetails {
	
	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "rlndetails_seq")
    @SequenceGenerator(name = "rlndetails_seq", sequenceName = "rlndetails_sequence")
	@Column(insertable = false,  updatable = false, nullable = false)
	private long rlnId;
	@Column(nullable = false)
	private long balance = 100000000; 
	@Column(nullable = false)
	private float homeLoanInterest;
	@Column(nullable = false)
	private float educationLoanInterest;
	@Column(nullable = false)
	private float depositInterest;
	@Column(nullable = false)
	private long insuranceMontlyPayment = 0;
	@Column(nullable = false)
	private long insuranceYearlyPayment = 0;
	@Column(nullable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@CreatedDate
	private Date date = new Date();

	
}
