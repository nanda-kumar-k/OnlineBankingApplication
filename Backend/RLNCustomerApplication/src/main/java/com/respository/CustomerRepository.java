package com.respository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.model.Customer;

@Repository
public interface CustomerRepository extends CrudRepository<Customer,Integer>{

}
