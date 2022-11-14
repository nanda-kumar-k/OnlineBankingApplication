package com.rln.repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.rln.model.HomeLoanInterestPayment;


@Repository
public interface HomeLoanInterestPaymentRepository extends CrudRepository<HomeLoanInterestPayment, Long>{

}
