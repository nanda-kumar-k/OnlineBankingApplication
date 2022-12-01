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
import org.springframework.web.multipart.MultipartFile;

import com.rln.model.Customer;
import com.rln.model.CustomerProfile;
import com.rln.payload.response.JwtResponse;
import com.rln.repository.CustomerProfileRepository;
import com.rln.repository.CustomerRepository;
import com.rln.security.jwt.JwtUtils;
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
	
	@Autowired
	private FilesStorageService filesStorageService;
	
	@Override
	public String _GetUsernameFromToken(String token) {
		
		JwtUtils jwtUtils = new JwtUtils();
		String username = jwtUtils.getUserNameFromJwtToken(token.substring(7));
		
		return username;
	}
	
	@Override
	public Optional<Customer> _getCustomerDetailsByAccountNumber(String accountNo) {
		
		Optional<Customer> user = customerRepository.findByAccountNumber(accountNo);

		
		return user;
	}
	
	@Override
	public boolean _createOrUpdateCustomer(Customer customer) {
		
		Customer check = customerRepository.save(customer);
		
		if(check != null) {
			return true;
		}
		
		return false;
	}
	
	@Override
	public boolean _checkCustomer(String user) {
		
		Optional<Customer> check = customerRepository.findByUsername(user);
		
		
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
		
		customerProfile.getCustomer().setStrongPassword(customerProfile.getCustomer().getUsername() + 
				customerProfile.getCustomer().getPassword());
		customerProfile.getCustomer().setPassword(encoder.encode(customerProfile.getCustomer().getPassword()));
		
		Random random = new Random();
		BigInteger bigInteger = BigInteger.valueOf(Math.round(random.nextFloat() * Math.pow(10,12)));
		
		String acc = bigInteger.toString();
		
		if (acc.length() != 12 ) {
			_createRLNCustomer(customerProfile);
		}
		
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
	public String _uploadCustomerPhoto(MultipartFile file, String username) {
		
		Customer customer = customerRepository.findByUsername(username).get();
		
		if( customer != null ) {
			try {
				
				String url = filesStorageService.save(file);
				
				if(url.equals("failed")) {
					
					return "Could not upload the file...!! Try again";
					
				}
				else {
					
					customer.setImgUrl(url);
					customerRepository.save(customer);
					return "uploaded";
					
				}
				
			}
			catch(Exception e) {
				
				return "Could not upload the file...!! Try again";
				
			}
		}
		
		else {
			
			return "Customer Not found...!!! Contact nearest RLN Bank...!!";
		}
	}
	
	
	@Override
	public JwtResponse _authenticateCustomer(Customer customer) {
		
		Customer cus = customerRepository.findByUsername(customer.getUsername()).get();
		
		if ( cus != null ) {
			
			if ( cus.isVerificationStatus() ) {
				Authentication authentication = authenticationManager.authenticate(
				        new UsernamePasswordAuthenticationToken(customer.getUsername(), customer.getPassword()));

				SecurityContextHolder.getContext().setAuthentication(authentication);
				String jwt = jwtUtils.generateJwtToken(authentication);
				UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
				    
				return new JwtResponse(200,jwt, 
				                         userDetails.getUsername(),
				                         userDetails.getAccountType()
				                         );
			}
			else {
				
				return new JwtResponse(100,null,null,null);
			}
		}
		else {
			return new JwtResponse(400,null,null,null);
		}
		
		
	}


	@Override
	public boolean _checkUsernameAvailability(String username) {
		
		Optional<Customer> check = customerRepository.findByUsername(username);
		
		if ( check.isEmpty() ) {
			
			return true;
		}
		
		return false;
	}


	@Override
	public Customer _checkCustomerBalance(String token) {
		
		String username = _GetUsernameFromToken(token);
		
		Optional<Customer> check = customerRepository.findByUsername(username);
		
		return check.get();
	}

	@Override
	public CustomerProfile _getCustomerProfile(String token) {
		
		Customer customer = _checkCustomerBalance(token);
		CustomerProfile cp;
		if ( customer != null ) {
			
			cp = customerProfileRepository.findByCustomerId(customer.getCustomer_id());
			
			if ( cp != null ) {
				
				return cp;
			}
			else  {
				
				return null;
			}
			
		}
		else {
			return null;
		}
		
	}

	

	



	


	

}
