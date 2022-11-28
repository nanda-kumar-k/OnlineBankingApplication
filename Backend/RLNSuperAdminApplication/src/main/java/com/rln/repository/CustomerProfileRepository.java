package com.rln.repository;



import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.rln.model.CustomerProfile;


@Repository
public interface CustomerProfileRepository extends CrudRepository<CustomerProfile, 	Long> {
	
	CustomerProfile findByCustomerId(long customerId);

}
