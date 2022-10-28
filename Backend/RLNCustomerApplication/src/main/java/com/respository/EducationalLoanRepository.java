package com.respository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.model.EducationlLoan;


@Repository
public interface EducationalLoanRepository extends CrudRepository<EducationlLoan,Integer>{

}
