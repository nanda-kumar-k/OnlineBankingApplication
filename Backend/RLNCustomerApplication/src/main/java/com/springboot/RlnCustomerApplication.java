<<<<<<< HEAD:Backend/RLNCustomerApplication/src/main/java/com/springboot/RlnCustomerApplication.java
package com.springboot;
=======
package com.rln;
>>>>>>> b2411aa8b3f0a198bc2fb7e1bc7afd2a6eb42700:Backend/RLNCustomerApplication/src/main/java/com/rln/RlnCustomerApplication.java

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
<<<<<<< HEAD:Backend/RLNCustomerApplication/src/main/java/com/springboot/RlnCustomerApplication.java
@ComponentScan(basePackages="com.springboot")
=======
@ComponentScan(basePackages = "com.rln")
>>>>>>> b2411aa8b3f0a198bc2fb7e1bc7afd2a6eb42700:Backend/RLNCustomerApplication/src/main/java/com/rln/RlnCustomerApplication.java
public class RlnCustomerApplication {

	public static void main(String[] args) 
	{
		SpringApplication.run(RlnCustomerApplication.class, args);
		System.out.println("RLN Customer Application Runninng...!!!");
	}

}
