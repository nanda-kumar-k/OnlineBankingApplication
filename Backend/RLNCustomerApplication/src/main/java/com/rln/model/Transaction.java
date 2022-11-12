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
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Transaction {
	
	
	@Id
	@GeneratedValue(generator = "uuid2")
	@GenericGenerator(name = "uuid2", strategy = "uuid2")
	@Column(insertable = false, updatable = false, nullable = false)
	private UUID transactionId;
	@Column(insertable = false, updatable = false, nullable = false)
	private UUID customerId;
	@Column(nullable = false, updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@CreatedDate
	private Date transactionDate = new Date();
	@Column(nullable = false)
	private long amountTransfer;
	@Column(nullable = false)
	private String recieverName;
	@Column(nullable = false)
	private long recieverAccountNumber;
	@Column(nullable = false)
	private String senderName;
	@Column(nullable = false)
	private long senderAccountNumber;
	@Column(nullable = false)
	private boolean transactionStatus = false;
	
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "customerId", referencedColumnName = "customer_id")
	private Customer customerRef;

}
