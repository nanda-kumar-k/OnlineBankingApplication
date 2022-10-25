package com.rln.RLNApplication.Customer.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.rln.RLNApplication.Customer.Model.Customer;


@Repository
public interface CustomerRepository extends CrudRepository<Customer,String>
{

}
