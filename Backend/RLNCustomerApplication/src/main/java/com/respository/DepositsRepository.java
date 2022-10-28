package com.respository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.model.Deposits;


@Repository
public interface DepositsRepository extends CrudRepository<Deposits,Integer>{

}
