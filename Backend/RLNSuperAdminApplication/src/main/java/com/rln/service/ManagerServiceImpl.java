package com.rln.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rln.repository.EmployeeRepository;

@Service
public class ManagerServiceImpl implements ManagerService {
	
	@Autowired
	private EmployeeRepository employeeRepository;

}
