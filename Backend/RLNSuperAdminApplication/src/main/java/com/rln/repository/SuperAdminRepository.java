package com.rln.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.rln.model.Customer;
import com.rln.model.SuperAdmin;

@Repository
public interface SuperAdminRepository extends CrudRepository<SuperAdmin, Long> {
	
	Optional<Customer>findByUsername(String user);

}
