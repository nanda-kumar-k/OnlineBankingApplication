package com.rln.RLNApplication.BusinessApi.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.rln.RLNApplication.BusinessApi.Model.BusinessApi;
import com.rln.RLNApplication.BusinessApi.Repository.BusinessApiRepository;
import com.rln.RLNApplication.BusinessApi.Service.businessapiservice;

@Controller
public class ClientController
{
	@Autowired
	 private 	businessapiservice  businessapiService;
}
