<<<<<<< HEAD:Backend/RLNCustomerApplication/src/main/java/com/springboot/controller/ClientController.java
package com.springboot.controller;
=======
package com.rln.controller;
>>>>>>> b2411aa8b3f0a198bc2fb7e1bc7afd2a6eb42700:Backend/RLNCustomerApplication/src/main/java/com/rln/controller/CustomerController.java

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
<<<<<<< HEAD:Backend/RLNCustomerApplication/src/main/java/com/springboot/controller/ClientController.java
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.model.Customer;

import com.springboot.service.CustomerService;
@RestController
public class ClientController {
	
	@Autowired
	private CustomerService customerService;
	
	
=======
import org.springframework.web.bind.annotation.RestController;

import com.rln.model.Customer;
import com.rln.service.CustomerService;


@RestController
public class CustomerController {
	
	
	@Autowired
	private CustomerService customerService;
>>>>>>> b2411aa8b3f0a198bc2fb7e1bc7afd2a6eb42700:Backend/RLNCustomerApplication/src/main/java/com/rln/controller/CustomerController.java
	
	@PostMapping("/addcustomer")
	public String addEmployee(@RequestBody  Customer customer)
	{
		customerService.addCustomer(customer);
//		customerProfileService.addCustomerProfile(null);
		return "Customer added";
	}
	
<<<<<<< HEAD:Backend/RLNCustomerApplication/src/main/java/com/springboot/controller/ClientController.java
	//@GetMapping("/")
	@RequestMapping(value = "/",method = RequestMethod.GET)
	public String view()
	{
		return "hello";
	}
=======
	@RequestMapping("/")
	public String view() {
		return "hello";
	}
	
	
>>>>>>> b2411aa8b3f0a198bc2fb7e1bc7afd2a6eb42700:Backend/RLNCustomerApplication/src/main/java/com/rln/controller/CustomerController.java
}
