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
public interface CustomerRepository extends CrudRepository<Customer, UUID> {
	
	Optional<Customer>findByUsername(String user);
	Optional<Customer>findByAccountNumber(String acc);
	
	@Transactional
	@Modifying
	@Query("update Customer e set e.balance=?1 where e.username=?2 ")
	int updateRecord(long balance, String username);
	
	@Transactional
	@Modifying
	@Query("select e from Customer e")
	List<Customer> getAllCustomer();
	
}
