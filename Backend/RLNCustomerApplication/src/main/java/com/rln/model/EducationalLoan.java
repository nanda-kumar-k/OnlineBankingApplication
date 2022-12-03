package com.rln.model;

import java.util.Date;
import java.util.UUID;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.GenericGenerator;
import org.springframework.beans.factory.annotation.Value;
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
public class EducationalLoan {
	
	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "educational_seq")
    @SequenceGenerator(name = "educational_seq", sequenceName = "educational_sequence")
	@Column(insertable = false,  updatable = false, nullable = false)
	private long educationalTableId;
	@Column(insertable = false, updatable = false, nullable = false)
	private long customerrefid;
	@Column(updatable = false,nullable = false)
	private String educationalLoanId;
	@Column(nullable = false, updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@CreatedDate
	private Date loanDate = new Date();
	@Column(nullable = false)
	private float loanInterest;
	@Column(nullable = false)
	private long loanAmount;
	@Column(nullable = false)
	private String institutionName;
	@Column(nullable = false)
	private String degree;
	@Column(nullable = false)
	private int yearOfStudy;
	@Column(nullable = false)
	private String institutionAddress;
	@Column(nullable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@CreatedDate
	private Date loanEndDate;
	@Column(nullable = false)
	private String nomineeName;
	@Column(nullable = false)
	private long loanPendingAmount = 0;
	@Column(nullable = false)
	private boolean loanStatus = true;
	@Column(nullable = false)
	private boolean loanVerification = false;
	@Column(nullable = false)
	private String documentUrl = "Not found";
	
	@Column(nullable = false)
	private float cibilSCore;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "customerrefid", referencedColumnName = "customer_id")
	private Customer customer;


}
