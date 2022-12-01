package com.rln.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
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
public class Employee {
	
	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "employee_seq")
    @SequenceGenerator(name = "employee_seq", sequenceName = "employee_sequence")
	@Column(insertable = false,updatable = false, nullable = false)
	private long employeeTableId;
	@Column(nullable = false)
	private String username;
	@Column(nullable = false)
	private String password;
	@Column(nullable = false)
	private String firstName;
	@Column(nullable = false)
	private String lastName;
	@Column(nullable = false)
	private String phoneNumber;
	@Column(nullable = false)
	private String gender;
	@Column(nullable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@CreatedDate
	private Date dob;
	@Column(nullable = false)
	private String emailId;
	@Column(nullable = false, updatable = false)
	@Temporal(TemporalType.TIMESTAMP)
	@CreatedDate
	private Date createdDate = new Date();

}
