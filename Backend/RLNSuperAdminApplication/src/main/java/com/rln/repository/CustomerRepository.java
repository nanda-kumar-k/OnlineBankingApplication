package com.rln.repository;


import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.rln.model.Customer;



@Repository
public interface CustomerRepository extends CrudRepository<Customer, Long> {
	
	Optional<Customer>findByUsername(String user);
	Optional<Customer>findByAccountNumber(String acc);
	
	List<Customer>findByVerificationStatusFalse();
	
}
