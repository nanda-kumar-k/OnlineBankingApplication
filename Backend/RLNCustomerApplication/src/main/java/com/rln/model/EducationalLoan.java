package com.rln.model;

import java.util.Date;
import java.util.UUID;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.annotation.CreatedDate;

@Entity
@Table

public class EducationalLoan {
	
	@Id
	@GeneratedValue(generator = "uuid2")
	@GenericGenerator(name = "uuid2", strategy = "uuid2")
	@Column(columnDefinition = "BINARY(16)", insertable = false, updatable = false, nullable = false)
	private UUID loan_id;
	@Column(insertable = false, updatable = false, nullable = false)
	private UUID customer_id;
	@Column(nullable = false)
	@CreatedDate
	private Date loan_date;
	@Column(nullable = false)
	private long loan_amount;
	@Column(nullable = false)
	private String institution_name;
	@Column(nullable = false)
	private String degree;
	@Column(nullable = false)
	private int year_of_study;
	@Column(nullable = false)
	private String institution_address;
	@Column(nullable = false)
	private Date loan_end_date;
	@Column(nullable = false)
	private String nominee_name;
	@Column(nullable = false)
	private long loan_current_amount;
	@Column(nullable = false)
	@Value("${some.key:true}")
	private boolean loan_status;
	@Column(nullable = false)
	@Value("${some.key:false}")
	private boolean loan_verification;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "customer_id", referencedColumnName = "customer_id")
	private Customer customer_ref;


}
