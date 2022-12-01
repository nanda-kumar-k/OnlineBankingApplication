package com.rln.controller;



import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.rln.model.Customer;
import com.rln.model.CustomerProfile;
import com.rln.payload.response.ApiResponse;
import com.rln.payload.response.JwtResponse;
import com.rln.security.jwt.JwtUtils;
import com.rln.service.CustomerService;
import com.rln.service.FilesStorageService;


@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequestMapping("/api/customer")
public class CustomerController {
	

	@Autowired
	public CustomerService customerService;
	
	@Autowired
	public FilesStorageService storageService;
		
	
	

}
