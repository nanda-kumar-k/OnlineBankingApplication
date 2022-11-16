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
import org.springframework.data.annotation.CreatedDate;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table
@Setter
@Getter
public class BusinessAPI {
	
	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "businessapi_seq")
    @SequenceGenerator(name = "businessapi_seq", sequenceName = "businessapi_sequence")
	@Column(insertable = false,updatable = false, nullable = false)
	private long apiTableId;
	@Column(insertable = false, updatable = false, nullable = false)
	private long customerrefid;
	@Column(updatable = false, nullable = false)
	private String apiKey;
	@Column(updatable = false, nullable = false)
	private String customerAccountNumber;
	@Column(nullable = false, updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@CreatedDate
	private Date createdDate = new Date();
	@Column(updatable = false,nullable = false)
	private String authDomain;

	
	
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "customerrefid", referencedColumnName = "customer_id")
	private Customer customer;

}
