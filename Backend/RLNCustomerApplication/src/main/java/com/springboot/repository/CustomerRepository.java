package com.springboot.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.springboot.model.Customer;

@Repository
public interface CustomerRepository extends CrudRepository<Customer,Integer>
{

}
