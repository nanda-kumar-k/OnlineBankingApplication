package com.rln.repository;



import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.rln.model.EducationalLoan;


@Repository
public interface EducationalLoanRepository extends CrudRepository<EducationalLoan, Long>{
	
	EducationalLoan findByEducationalLoanId(String loanid);
	
	List<EducationalLoan> findByLoanVerificationFalse();

}
