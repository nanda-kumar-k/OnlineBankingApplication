package com.rln.RLNApplication.Transcations.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.rln.RLNApplication.Customer.Model.Customer;
import com.rln.RLNApplication.Transcations.Model.Transcations;
@Repository
public interface TranscationRepository   extends CrudRepository<Transcations,String>
{

}
