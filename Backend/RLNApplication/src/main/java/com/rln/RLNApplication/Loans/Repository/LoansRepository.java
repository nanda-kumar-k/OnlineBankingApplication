package com.rln.RLNApplication.Loans.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.rln.RLNApplication.Customer.Model.Customer;
import com.rln.RLNApplication.Loans.Model.Loans;
@Repository
public interface LoansRepository  extends CrudRepository<Loans,String>
{

}
