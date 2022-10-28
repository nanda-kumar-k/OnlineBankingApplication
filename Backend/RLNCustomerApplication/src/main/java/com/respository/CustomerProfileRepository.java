package com.respository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.model.CustomerProfile;


@Repository
public interface CustomerProfileRepository extends CrudRepository<CustomerProfile,Integer> {

}
