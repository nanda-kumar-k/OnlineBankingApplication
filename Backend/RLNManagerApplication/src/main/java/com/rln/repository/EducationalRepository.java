package com.rln.repository;

import java.util.UUID;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.rln.model.EducationalLoan;


@Repository
public interface EducationalRepository extends CrudRepository<EducationalLoan, UUID>{

}
