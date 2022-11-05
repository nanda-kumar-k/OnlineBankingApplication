package com.rln.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.rln.model.RLNDocuments;

@Repository
public interface RLNDocumentsRepository extends CrudRepository<RLNDocuments, Integer>{

}
