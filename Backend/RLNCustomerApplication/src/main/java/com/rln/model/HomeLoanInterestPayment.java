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

public class HomeLoanInterestPayment {
	
	@Id
	@GeneratedValue(generator = "uuid2")
	@GenericGenerator(name = "uuid2", strategy = "uuid2")
	@Column(columnDefinition = "BINARY(16)", insertable = false, updatable = false, nullable = false)
	private UUID loan_payment_id;
	@Column(insertable = false, updatable = false, nullable = false)
	private UUID loan_id;
	@CreatedDate
	private Date payment_date;
	private long amount_paid;
	@Value("${some.key:false}")
	private boolean status;
	
	
	
//	@ManyToOne(cascade = CascadeType.ALL)
//	@JoinColumn(name = "customer_id", referencedColumnName = "loan_id")
//	private HomeLoan homeLoan_ref;
	


}
