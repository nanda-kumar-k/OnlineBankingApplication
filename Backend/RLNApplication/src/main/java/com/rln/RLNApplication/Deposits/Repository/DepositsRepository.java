package com.rln.RLNApplication.Deposits.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.rln.RLNApplication.Deposits.Model.Deposits;



@Repository
public interface DepositsRepository  extends CrudRepository<Deposits,String>
{

}
