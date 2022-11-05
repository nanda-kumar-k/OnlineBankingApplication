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
import org.springframework.data.annotation.CreatedDate;

@Entity
@Table

public class BusinessAPI {
	
	@Id
	@GeneratedValue(generator = "uuid2")
	@GenericGenerator(name = "uuid2", strategy = "uuid2")
	@Column(columnDefinition = "BINARY(16)", insertable = false, updatable = false, nullable = false)
	private UUID api_id;
	@Column(insertable = false, updatable = false, nullable = false)
	private UUID customer_id;
	@Column(nullable = false)
	@CreatedDate
	private Date created_date;
	@Column(nullable = false)
	private String auth_domain;
	private String purpose;
	@Column(nullable = false)
	private String get_request_url;
	@Column(nullable = false)
	private String redirect_url;
	
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "customer_id", referencedColumnName = "customer_id")
	private Customer customer_ref;

}
