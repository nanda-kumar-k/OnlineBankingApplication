package com.rln.repository;

import java.util.UUID;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.rln.model.Manager;

@Repository
public interface ManagerRepository extends CrudRepository<Manager, Long> {
	
	Manager findByUsername(String username);

}
