package com.rln.repository;


import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.rln.model.HomeLoan;

@Repository
public interface HomeLoanRepository extends CrudRepository<HomeLoan, Long>{
	
	HomeLoan findByHomeLoanId(String loanid);
	
	List<HomeLoan> findByLoanVerificationFalse();

}
