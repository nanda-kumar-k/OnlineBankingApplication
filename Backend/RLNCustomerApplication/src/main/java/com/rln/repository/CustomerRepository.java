<<<<<<< HEAD:Backend/RLNCustomerApplication/src/main/java/com/springboot/repository/CustomerRepository.java
package com.springboot.repository;
=======
package com.rln.repository;

import java.util.UUID;
>>>>>>> b2411aa8b3f0a198bc2fb7e1bc7afd2a6eb42700:Backend/RLNCustomerApplication/src/main/java/com/rln/repository/CustomerRepository.java

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

<<<<<<< HEAD:Backend/RLNCustomerApplication/src/main/java/com/springboot/repository/CustomerRepository.java
import com.springboot.model.Customer;

@Repository
public interface CustomerRepository extends CrudRepository<Customer,Integer>
{
=======
import com.rln.model.Customer;

@Repository
public interface CustomerRepository extends CrudRepository<Customer, UUID>{
>>>>>>> b2411aa8b3f0a198bc2fb7e1bc7afd2a6eb42700:Backend/RLNCustomerApplication/src/main/java/com/rln/repository/CustomerRepository.java

}