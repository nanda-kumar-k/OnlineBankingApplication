package com.rln.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.rln.model.Manager;

@Repository
public interface ManagerRepository extends CrudRepository<Manager, Long> {
	
	Optional<Manager> findByUsername(String username);

}
