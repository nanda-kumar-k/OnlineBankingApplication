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

import lombok.Getter;
import lombok.Setter;


@Entity
@Table
@Setter
@Getter
public class BusinessTransaction {
	
	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "businesstrans_seq")
    @SequenceGenerator(name = "businesstrans_seq", sequenceName = "businesstrans_sequence")
	@Column(insertable = false,updatable = false, nullable = false)
	private long payemntTableId;
	@Column(insertable = false, updatable = false, nullable = false)
	private long apiTableKey;
	@Column(updatable = false, nullable = false)
	private String paymentId;
	@Column(updatable = false, nullable = false)
	private String paymentRequestId;
	@Column(nullable = false)
	private String purpose;
	@Column(nullable = false)
	private String redirectGetURL;
	@Column(nullable = false, updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@CreatedDate
	private Date paymentRequestDate = new Date();
	@Column(nullable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@CreatedDate
	private Date paymentDate;
	@Column(nullable = false)
	private String paymentCustomerUsername;
	@Column(nullable = false)
	private String paymentCustomeAccountNumber;
	@Column(nullable = false)
	private double amountPaid;
	@Column(nullable = false)
	private boolean paymentStatus = false;
	@Column(nullable = false)
	private int paymentRequestCount = 0;
	@Column(updatable = false,nullable = false)
	private String authDomain;
	
	
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "apiTableKey", referencedColumnName = "apiTableId")
	private BusinessAPI businessAPI;

}
