package com.rln.RLNApplication.BusinessApi.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.rln.RLNApplication.BusinessApi.Model.BusinessApi;
import com.rln.RLNApplication.Loans.Model.Loans;

@Repository
public interface BusinessApiRepository   extends CrudRepository<BusinessApi,String>
{

}
