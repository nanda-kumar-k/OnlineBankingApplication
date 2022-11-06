package com.rln.model;

import java.math.BigInteger;
import java.util.Date;
import java.util.UUID;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.springframework.data.annotation.CreatedDate;


@Entity
@Table
public class CustomerProfile {
	
	@Id
	@Column(insertable = false, updatable = false, nullable = false)
	private UUID customer_id;
	private String gender;
	private Date dob;
	private String address;
	private boolean marital_status;
	private BigInteger aadhaar_number;
	private String pan_number;
	private String organisation_name;
	private String designation;
	private String nature_of_employment;
	private long annual_income;
	private String qualification;
	private String father_name;
	private Date father_dob;
	private String mother_name;
	private Date mother_dob;
	@CreatedDate
	private Date created_date;
	
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "customer_id", referencedColumnName = "customer_id")
	private Customer customer_ref;


	public UUID getCustomer_id() {
		return customer_id;
	}


	public void setCustomer_id(UUID customer_id) {
		this.customer_id = customer_id;
	}


	public String getGender() {
		return gender;
	}


	public void setGender(String gender) {
		this.gender = gender;
	}


	public Date getDob() {
		return dob;
	}


	public void setDob(Date dob) {
		this.dob = dob;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public boolean isMarital_status() {
		return marital_status;
	}


	public void setMarital_status(boolean marital_status) {
		this.marital_status = marital_status;
	}


	public BigInteger getAadhaar_number() {
		return aadhaar_number;
	}


	public void setAadhaar_number(BigInteger aadhaar_number) {
		this.aadhaar_number = aadhaar_number;
	}


	public String getPan_number() {
		return pan_number;
	}


	public void setPan_number(String pan_number) {
		this.pan_number = pan_number;
	}


	public String getOrganisation_name() {
		return organisation_name;
	}


	public void setOrganisation_name(String organisation_name) {
		this.organisation_name = organisation_name;
	}


	public String getDesignation() {
		return designation;
	}


	public void setDesignation(String designation) {
		this.designation = designation;
	}


	public String getNature_of_employment() {
		return nature_of_employment;
	}


	public void setNature_of_employment(String nature_of_employment) {
		this.nature_of_employment = nature_of_employment;
	}


	public long getAnnual_income() {
		return annual_income;
	}


	public void setAnnual_income(long annual_income) {
		this.annual_income = annual_income;
	}


	public String getQualification() {
		return qualification;
	}


	public void setQualification(String qualification) {
		this.qualification = qualification;
	}


	public String getFather_name() {
		return father_name;
	}


	public void setFather_name(String father_name) {
		this.father_name = father_name;
	}


	public Date getFather_dob() {
		return father_dob;
	}


	public void setFather_dob(Date father_dob) {
		this.father_dob = father_dob;
	}


	public String getMother_name() {
		return mother_name;
	}


	public void setMother_name(String mother_name) {
		this.mother_name = mother_name;
	}


	public Date getMother_dob() {
		return mother_dob;
	}


	public void setMother_dob(Date mother_dob) {
		this.mother_dob = mother_dob;
	}


	public Date getCreated_date() {
		return created_date;
	}


	public void setCreated_date(Date created_date) {
		this.created_date = created_date;
	}


	public Customer getCustomer_ref() {
		return customer_ref;
	}


	public void setCustomer_ref(Customer customer_ref) {
		this.customer_ref = customer_ref;
	}
	
}
