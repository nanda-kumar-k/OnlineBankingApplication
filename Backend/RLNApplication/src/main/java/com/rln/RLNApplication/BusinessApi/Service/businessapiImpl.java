package com.rln.RLNApplication.BusinessApi.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rln.RLNApplication.BusinessApi.Repository.BusinessApiRepository;

@Service
public class businessapiImpl   implements businessapiservice
{
	@Autowired
	 private 	BusinessApiRepository businessapiRepository;
}
