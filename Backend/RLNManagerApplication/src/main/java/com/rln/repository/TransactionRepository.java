package com.rln.repository;

import java.util.List;
import java.util.UUID;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.rln.model.Customer;
import com.rln.model.Transaction;


@Repository
public interface TransactionRepository extends CrudRepository<Transaction, Long>{
	
	
	List<Transaction> findByCustomerrefid(UUID uuid);


	
}
