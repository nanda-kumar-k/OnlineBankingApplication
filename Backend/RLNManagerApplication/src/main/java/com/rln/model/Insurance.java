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

public class Insurance {
	
	@Id
	@GeneratedValue(generator = "uuid2")
	@GenericGenerator(name = "uuid2", strategy = "uuid2")
	@Column(columnDefinition = "BINARY(16)", insertable = false, updatable = false, nullable = false)
	private UUID insurance_id;
	@Column(insertable = false, updatable = false, nullable = false)
	private UUID customer_id;
	@Column(nullable = false)
	@CreatedDate
	private Date insurance_data;
	@Column(nullable = false)
	private Date insurance_end_date;
	@Column(nullable = false)
	private long insurance_amount;
	@Column(nullable = false)
	@Value("${some.key:true}")
	private boolean insurance_status;
	@Column(nullable = false)
	private String insurance_type;
	@Column(nullable = false)
	@Value("${some.key:false}")
	private boolean insurance_verification;
	private long insurance_current_amount;
	
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "customer_id", referencedColumnName = "customer_id")
	private Customer customer_ref;
}
