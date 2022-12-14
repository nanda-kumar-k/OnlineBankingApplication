package com.rln.repository;



import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.rln.model.BusinessAPI;

@Repository
public interface BusinessAPIRepository extends CrudRepository<BusinessAPI, Long>{
	
	BusinessAPI findByApiKeyAndAuthDomain(String apikey, String authdomain);
	
	BusinessAPI findByAuthDomain(String authdomain);

}
