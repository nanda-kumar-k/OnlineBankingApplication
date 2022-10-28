package com.respository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.model.Transaction;

@Repository
public interface TransactionRepository extends CrudRepository<Transaction,Integer>{

}
