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
@AllArgsConstructor
@NoArgsConstructor
public class HomeLoanInterestPayment {
	
	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "homeloanpayment_seq")
    @SequenceGenerator(name = "homeloanpayment_seq", sequenceName = "homanloanpayment_sequence")
	@Column(insertable = false,  updatable = false, nullable = false)
	private long paymentTableId;
	@Column(updatable = false,nullable = false)
	private String loanPaymentId;
	@Column(insertable = false, updatable = false, nullable = false)
	private long homeLoanref;
	@Column(nullable = false, updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@CreatedDate
	private Date paymentDate = new Date();
	@Column(nullable = false, updatable = false)
	private long amountPaid;
	@Column(nullable = false, updatable = false)
	private boolean status = false;
	
	
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "homeLoanref", referencedColumnName = "homeTableId")
	private HomeLoan homeLoan;
	


}
