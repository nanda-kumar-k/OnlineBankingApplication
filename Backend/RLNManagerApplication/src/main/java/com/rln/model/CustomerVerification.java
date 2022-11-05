package com.rln.model;

import java.util.Date;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.annotation.CreatedDate;


@Entity
@Table

public class CustomerVerification {
	
	
	@Id
	@GeneratedValue(generator = "uuid2")
	@GenericGenerator(name = "uuid2", strategy = "uuid2")
	@Column(columnDefinition = "BINARY(16)", insertable = false, updatable = false, nullable = false)
	private UUID verification_id;
	@Column(insertable = false, updatable = false, nullable = false)
	private UUID customer_id;
	@Column(nullable = false)
	private UUID load_id;
	@Column(nullable = false)
	private UUID admin_id;
	@Column(nullable = false)
	private String admin_type;
	@Value("${some.key:false}")
	private boolean status;
	@Column(nullable = false)
	@CreatedDate
	private Date verifiy_date;

}
