package com.rln.model;

import java.math.BigInteger;
import java.util.Date;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;


import org.hibernate.annotations.GenericGenerator;
import org.springframework.data.annotation.CreatedDate;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
//@Table(uniqueConstraints = {
//		@UniqueConstraint(columnNames = "accountNumber"),
//		@UniqueConstraint(columnNames = "username")
//})
@Table
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Customer {
	@Id
	@GeneratedValue(generator = "uuid2")
	@GenericGenerator(name = "uuid2", strategy = "uuid2")
	@Column(insertable = false, updatable = false, nullable = false)
	private UUID customer_id;
	@Column(nullable = false)
	private String accountNumber;
	@Column(nullable = false)
	private String username;
	@Column(nullable = false)
	private String firstName;
	@Column(nullable = false)
	private String lastName;
	@Column(nullable = false)
	private long contactNumber;
	@Column(nullable = false)
	private String emailId;
	@Column(nullable = false)
	private String password;
	@Column(nullable = false)
	private String accountType;
	@Column(nullable = false)
	private long balance = (long) 25000;
	@Column(nullable = false)
	private boolean verificationStatus = false;
	@Column(nullable = false, updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@CreatedDate
	private Date created_date = new Date();	
	
	
//	@ManyToMany(fetch = FetchType.LAZY)
//	  @JoinTable(  name = "customer_type", 
//	        joinColumns = @JoinColumn(name = "customer_id"), 
//	        inverseJoinColumns = @JoinColumn(name = "id"))
//	  private Set<Role> customerType = new HashSet<>();

}
