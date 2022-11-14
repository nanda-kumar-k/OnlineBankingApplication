package com.rln.repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.rln.model.EducationalLoanInterestPayment;


@Repository
public interface EducationalLoanInterestPaymentRepository extends CrudRepository<EducationalLoanInterestPayment, Long>{

	
}
