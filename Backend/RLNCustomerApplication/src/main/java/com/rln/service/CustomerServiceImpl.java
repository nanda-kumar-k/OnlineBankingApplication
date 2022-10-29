<<<<<<< HEAD:Backend/RLNCustomerApplication/src/main/java/com/springboot/service/CustomerServiceImpl.java
package com.springboot.service;
=======
package com.rln.service;
>>>>>>> b2411aa8b3f0a198bc2fb7e1bc7afd2a6eb42700:Backend/RLNCustomerApplication/src/main/java/com/rln/service/CustomerServiceImpl.java

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

<<<<<<< HEAD:Backend/RLNCustomerApplication/src/main/java/com/springboot/service/CustomerServiceImpl.java
import com.springboot.model.Customer;
import com.springboot.repository.CustomerRepository;

@Service
public class CustomerServiceImpl implements CustomerService  {
	
	 @Autowired
=======
import com.rln.model.Customer;
import com.rln.repository.CustomerRepository;

@Service
public class CustomerServiceImpl implements CustomerService{
	@Autowired
>>>>>>> b2411aa8b3f0a198bc2fb7e1bc7afd2a6eb42700:Backend/RLNCustomerApplication/src/main/java/com/rln/service/CustomerServiceImpl.java
	 private CustomerRepository customerRepository;

	@Override
	public String addCustomer(Customer customer) {
		customerRepository.save(customer);
		return "Customer Record Inserted Successfully";
	}
}
