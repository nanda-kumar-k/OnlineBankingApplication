package com.rln.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.rln.repository.RLNDocumentsRepository;

@Service
public class RLNDocumentsServiceImpl implements RLNDocumentsService {
	
	@Autowired
	private RLNDocumentsRepository documentsRepository;
	

}
