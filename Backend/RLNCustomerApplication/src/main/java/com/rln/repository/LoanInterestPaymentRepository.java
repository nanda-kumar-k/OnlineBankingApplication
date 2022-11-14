package com.rln.repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.rln.model.LoanInterestPayment;


@Repository
public interface LoanInterestPaymentRepository extends CrudRepository<LoanInterestPayment, Long>{
	
	LoanInterestPayment findByLoanId(String loanid);

}
