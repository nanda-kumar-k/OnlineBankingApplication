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
public class Deposit {
	
	@Id
	@GeneratedValue(generator = "uuid2")
	@GenericGenerator(name = "uuid2", strategy = "uuid2")
	@Column(columnDefinition = "BINARY(16)", insertable = false, updatable = false, nullable = false)
	private UUID deposit_id;
	@Column(insertable = false, updatable = false, nullable = false)
	private UUID customer_id;
	@Column(nullable = false)
	@CreatedDate
	private Date deposit_date;
	@Column(nullable = false)
	private long deposit_amount;
	@Column(nullable = false)
	private float deposit_interest;
	@Column(nullable = false)
	private Date deposit_end_date;
	@Column(nullable = false)
	private String nominee_name;
	@Column(nullable = false)
	@Value("${some.key:false}")
	private boolean deposite_status;
	@Column(nullable = false)
	private long deposite_current_amount;
	
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "customer_id", referencedColumnName = "customer_id")
	private Customer customer_ref;
	

}
