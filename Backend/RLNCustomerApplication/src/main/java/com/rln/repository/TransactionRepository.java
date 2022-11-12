package com.rln.repository;

import java.util.List;
import java.util.UUID;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.rln.model.Customer;
import com.rln.model.Transaction;


@Repository
public interface TransactionRepository extends CrudRepository<Transaction, UUID>{
	
	List<Transaction> findByCustomerId(UUID uuid);

}
