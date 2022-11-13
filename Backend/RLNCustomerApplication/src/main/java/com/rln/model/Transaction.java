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

import org.springframework.data.annotation.CreatedDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Table
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Transaction {
	
	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "transaction_seq")
    @SequenceGenerator(name = "transaction_seq", sequenceName = "transaction_sequence")
	@Column(insertable = false,  updatable = false, nullable = false)
	private long transid;
	@Column(insertable = false, updatable = false, nullable = false)
	private long customerrefid;
	@Column(nullable = false, updatable = false)
	private String transactionId;
	@Column(nullable = false, updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@CreatedDate
	private Date transactionDate = new Date();
	@Column(nullable = false)
	private long amountTransfer;
	@Column(nullable = false)
	private String recieverName;
	@Column(nullable = false)
	private String recieverAccountNumber;
	@Column(nullable = false)
	private String senderName;
	@Column(nullable = false)
	private String senderAccountNumber;
	@Column(nullable = false)
	private boolean transactionStatus = false;
	
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "customerrefid", referencedColumnName = "customer_id")
	private Customer customer;
	

}
