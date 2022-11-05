package com.rln.repository;

import java.util.UUID;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.rln.model.Employee;

@Repository
public interface EmployeeRepository extends CrudRepository<Employee, UUID>{

}
