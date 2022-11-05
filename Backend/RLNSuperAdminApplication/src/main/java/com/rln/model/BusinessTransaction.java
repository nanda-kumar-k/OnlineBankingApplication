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

public class BusinessTransaction {
	
	@Id
	@GeneratedValue(generator = "uuid2")
	@GenericGenerator(name = "uuid2", strategy = "uuid2")
	@Column(columnDefinition = "BINARY(16)", insertable = false, updatable = false, nullable = false)
	private UUID transaction_id;
	@Column(insertable = false, updatable = false, nullable = false)
	private UUID api_id;
	@Column(nullable = false)
	private String transaction_request_id;
	@Column(nullable = false)
	@CreatedDate
	private Date transaction_date;
	private long reciever_account_number;
	private long transaction_amount;
	@Column(nullable = false)
	@Value("${some.key:false}")
	private boolean transaction_status;
	
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "api_id", referencedColumnName = "api_id")
	private BusinessAPI businessAPI_ref;

}
