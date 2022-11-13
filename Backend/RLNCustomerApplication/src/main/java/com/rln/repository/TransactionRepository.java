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

	// update the transactionstatus for the transactionid
	@Transactional
	@Modifying
	@Query("update Transaction t set t.transactionStatus = ?1 where t.transactionId = ?2")
	int updateTransactionStatus(boolean transactionStatus, UUID transactionId);


	//get all the transactions for the customer
	@Query("select t from Transaction t ")
	List<Transaction> getAllTransactions();
	
	
	
	// create a transaction
//	@Modifying
//	@Query("insert INTO Transaction (amountTransfer, recieverName, recieverAccountNumber, senderName, senderAccountNumber, customerrefid) values (?1, ?2, ?3, ?4, ?5, ?6)")
//	@Transactional
//	int createCustomerTransaction(long amountTransfer, String recieverName, String recieverAccountNumber, String senderName, String senderAccountNumber, UUID customerrefid);

}
