package com.rln.service;

import java.lang.StackWalker.Option;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.rln.model.Customer;
import com.rln.model.CustomerProfile;
import com.rln.model.Deposit;
import com.rln.model.Employee;
import com.rln.model.Manager;
import com.rln.model.RLNBankDetails;
import com.rln.model.SuperAdmin;
import com.rln.payload.response.JwtResponse;
import com.rln.repository.CustomerProfileRepository;
import com.rln.repository.CustomerRepository;
import com.rln.repository.DepositRepository;
import com.rln.repository.EmployeeRepository;
import com.rln.repository.ManagerRepository;
import com.rln.repository.RLNBankDetailsRepository;
import com.rln.repository.SuperAdminRepository;
import com.rln.security.services.UserDetailsImpl;


@Service
public class SuperAdminServiceImpl implements SuperAdminService {
	
	@Autowired
	private SuperAdminRepository adminRepository;
	
	@Autowired
	private PasswordEncoder encoder;
	
	@Autowired
	private com.rln.security.jwt.JwtUtils jwtUtils;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private CustomerService customerService;
	
	@Autowired
	private CustomerRepository customerRepository;
	
	@Autowired
	private CustomerProfileRepository customerProfileRepository;
	
	@Autowired
	private DepositRepository depositRepository;
	
	
	@Autowired
	private ManagerRepository managerRepository;
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	
	@Autowired
	private RLNBankDetailsRepository bankDetailsRepository;
	
	@Override
	public boolean _createSuperAdmin() {
		
		SuperAdmin admin = new SuperAdmin();
		admin.setUsername("nandakumark");
		admin.setPassword(encoder.encode("nandu123"));
		
		adminRepository.save(admin);
		
		return false;
	}

	@Override
	public JwtResponse _authenticateSuperAdmin(SuperAdmin admin) {
//		System.out.println(admin.getUsername());
//		System.out.println(admin.getPassword());
		Authentication authentication = authenticationManager.authenticate(
		        new UsernamePasswordAuthenticationToken(admin.getUsername(), admin.getPassword()));

		SecurityContextHolder.getContext().setAuthentication(authentication);
		String jwt = jwtUtils.generateJwtToken(authentication);
		UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
		    
		return new JwtResponse(jwt, 
		                         userDetails.getUsername()
		                         
		                         );
	}

	
	
	@Override
	public SuperAdmin _GetSuperAdminFromToken(String token) {
		
		String username = customerService._GetUsernameFromToken(token);
		
		Optional<SuperAdmin> check = adminRepository.findByUsername(username);
		
		return check.get();
		
	}
	
	
	@Override
	public List<Customer> _allAccountRequest() {
		
		List<Customer> res = customerRepository.findByVerificationStatusFalse();
		
		return res;
	}

	@Override
	public CustomerProfile _getCustomerProfile(String username) {
		
		Customer customer = customerRepository.findByUsername(username).get();
		
		if ( customer != null ) {
			
			CustomerProfile customerProfile = customerProfileRepository.findByCustomerId(
					customer.getCustomer_id());
			
			if ( customerProfile != null) {
				
				return customerProfile;
			}
			
		}
		
		return null;
	}

	@Override
	public boolean _customerVerification(String username) {
		
		Customer customer = customerRepository.findByUsername(username).get();
		
		if ( customer != null ) {
			
			customer.setVerificationStatus(true);
			customer.setBalance(30000);
			customerRepository.save(customer);
			
			return true;

		}
		
		return false;
	}

	@Override
	public List<Customer> _getAllCustomers() {
		
		List<Customer> res = (List<Customer>) customerRepository.findAll();
		
		return res;
	}

	@Override
	public boolean _addManager(Manager manager) {
		
		Manager check = managerRepository.findByUsername(manager.getUsername());
		
		if ( check == null ) {
			
			manager.setPassword(encoder.encode(manager.getPassword()));
			managerRepository.save(manager);
			return true;
		}
		else {
			
			return false;
		}
		
	}

	@Override
	public List<Manager> _getAllManagers() {
		
		List<Manager> res = (List<Manager>) managerRepository.findAll();
		
		return res;
	}

	@Override
	public boolean _addEmployee(Employee employee) {
		
		Employee check = employeeRepository.findByUsername(employee.getUsername());
		
		if ( check == null ) {
			
			employee.setPassword(encoder.encode(employee.getPassword()));
			employeeRepository.save(employee);
			return true;
		}
		else {
			
			return false;
		}
	}

	@Override
	public List<Employee> _getAllEmployees() {
		
		List<Employee> res = (List<Employee>) employeeRepository.findAll();
		
		return res;
	}

	@Override
	public boolean _updateRLNDetails(RLNBankDetails bankDetails) {
		
		List<RLNBankDetails> bd = (List<RLNBankDetails>) bankDetailsRepository.findAll();
		
		if ( bd.isEmpty() ) {
			
			bankDetailsRepository.save(bankDetails);
			return true;
		}
		else {
			
			bd.get(0).setDepositInterest(bankDetails.getDepositInterest());
			bd.get(0).setEducationLoanInterest(bankDetails.getEducationLoanInterest());
			bd.get(0).setHomeLoanInterest(bankDetails.getHomeLoanInterest());
			bankDetailsRepository.save(bd.get(0));
			
			return true;
		}
		
	}

	@Override
	public RLNBankDetails _getRLNDetails() {
		
		List<RLNBankDetails> bd = (List<RLNBankDetails>) bankDetailsRepository.findAll();
		
		if ( bd.isEmpty() ) {
			return null;
		}
		
		return bd.get(0);
	}

	

	
	
	
	
	
	
}
