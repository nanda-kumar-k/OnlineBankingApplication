package com.rln.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rln.model.SuperAdmin;
import com.rln.repository.SuperAdminRepository;


@Service
public class SuperAdminServiceImpl implements SuperAdminService {
	
	@Autowired
	private SuperAdminRepository adminRepository;

}
