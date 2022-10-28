package com.respository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.model.HomeLoan;

@Repository
public interface HomeLoanRepository extends CrudRepository<HomeLoan,Integer>{

}
