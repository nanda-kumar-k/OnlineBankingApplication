package com.rln.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.rln.model.Customer;

@Repository
public interface CustomerRepository  extends CrudRepository<Customer, Long> {
	
	Customer findByUsernameAndPassword(String username, String password);

}
