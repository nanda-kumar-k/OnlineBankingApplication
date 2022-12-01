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

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Deposit {
	
	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "deposit_seq")
    @SequenceGenerator(name = "deposit_seq", sequenceName = "deposit_sequence")
	@Column(insertable = false,  updatable = false, nullable = false)
	private long depositTableId;
	@Column(updatable = false, nullable = false)
	private String depositId;
	@Column(insertable = false, updatable = false, nullable = false)
	private long customerrefid;
	@Column(nullable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@CreatedDate
	private Date depositDate = new Date();
	@Column(nullable = false)
	private double depositAmount;
	@Column(nullable = false)
	private float depositInterest;
	@Column(nullable = false)
	private Date depositEndDate;
	@Column(nullable = false)
	private String nomineeName;
	@Column(nullable = false)
	private boolean depositeActiveStatus = true;
	@Column(nullable = false)
	private double depositeCurrentAmount = 0;
	
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "customerrefid", referencedColumnName = "customer_id")
	private Customer customer;
	

}
