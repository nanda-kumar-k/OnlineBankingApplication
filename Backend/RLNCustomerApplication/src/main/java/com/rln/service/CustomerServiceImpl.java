package com.rln.service;

import java.math.BigInteger;
import java.util.Optional;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;

import com.rln.model.Customer;
import com.rln.model.CustomerProfile;
import com.rln.payload.response.JwtResponse;
import com.rln.repository.CustomerProfileRepository;
import com.rln.repository.CustomerRepository;
import com.rln.security.services.UserDetailsImpl;


@Service
public class CustomerServiceImpl implements CustomerService {
	
	@Autowired
	private CustomerRepository customerRepository;
	
	@Autowired
	private CustomerProfileRepository customerProfileRepository;
	
	
	@Autowired
	private PasswordEncoder encoder;

	@Autowired
	private com.rln.security.jwt.JwtUtils jwtUtils;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Override
	public boolean _checkCustomer(String user) {
		
		Optional<Customer> check = customerRepository.findByUsername(user);
		
		System.out.println(check);
		
		if (check.isEmpty()) {
			return false;
		}
		
		return true;
	}

	
	@Override
	public boolean _checkAccountNumber(String accNo) {
		Optional<Customer> optional = customerRepository.findByAccountNumber(accNo);
		if(optional.isEmpty()) {
			return true;
		}
		return false;
	}
	
	
	@Override
	public boolean _createRLNCustomer(CustomerProfile customerProfile) {
		
		customerProfile.getCustomer().setPassword(encoder.encode(customerProfile.getCustomer().getPassword()));
		
		Random random = new Random();
		BigInteger bigInteger = BigInteger.valueOf(Math.round(random.nextFloat() * Math.pow(10,12)));
		
		String acc = bigInteger.toString();
		
		if ( _checkAccountNumber(acc )) {
			
			customerProfile.getCustomer().setAccountNumber(acc);
			Customer customer = customerRepository.save(customerProfile.getCustomer());
			
			if( customer != null ) {
				
				customerProfile.setCustomer(customer);
				CustomerProfile cp = customerProfileRepository.save(customerProfile);
				
				if ( cp !=  null ) {
					
					return true;
				}
				else {
					
					return false;
				}
			}
			else {
				return false;
			}
		}
		
		else {
			return _createRLNCustomer(customerProfile);
		}
	}


	@Override
	public ResponseEntity<?> _authenticateCustomer(Customer customer) {
		
		Authentication authentication = authenticationManager.authenticate(
		        new UsernamePasswordAuthenticationToken(customer.getUsername(), customer.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication);
		UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
		    
		return ResponseEntity.ok(new JwtResponse(jwt, 
		                         userDetails.getUsername()
		                         ));
	}


	@Override
	public boolean _checkUsernameAvailability(String username) {
		
		Optional<Customer> check = customerRepository.findByUsername(username);
		
		if ( check.isEmpty() ) {
			
			return true;
		}
		
		return false;
	}

}
