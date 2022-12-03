package com.rln.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.rln.model.RLNServiceRating;

@Repository
public interface RLNServiceRepository extends CrudRepository<RLNServiceRating, Long>{

}
