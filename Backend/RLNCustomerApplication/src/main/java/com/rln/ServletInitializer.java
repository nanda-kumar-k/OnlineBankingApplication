<<<<<<< HEAD:Backend/RLNCustomerApplication/src/main/java/com/springboot/ServletInitializer.java
package com.springboot;
=======
package com.rln;
>>>>>>> b2411aa8b3f0a198bc2fb7e1bc7afd2a6eb42700:Backend/RLNCustomerApplication/src/main/java/com/rln/ServletInitializer.java

import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

public class ServletInitializer extends SpringBootServletInitializer {

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(RlnCustomerApplication.class);
	}

}
