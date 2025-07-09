package com.cognizant.LoadCountryfromSpringConfigurationXML;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

	@SpringBootApplication
	public class LoadCountryfromSpringConfigurationXmlApplication {
		
		private static final Logger LOGGER = LoggerFactory.getLogger(LoadCountryfromSpringConfigurationXmlApplication.class);
		
		public static void main(String[] args) {
			SpringApplication.run(LoadCountryfromSpringConfigurationXmlApplication.class, args);
	    	LOGGER.info("START");
	    	displayCountry();    
	        
	        LOGGER.info("END");
		}
		public static void displayCountry() {
		    ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");

		    // Print one country:
		    Country country = context.getBean("countryIN", Country.class);
		    LOGGER.info("Single Country: {}", country);

		    // Print list of countries:
		    CountryList countryList = context.getBean("countryList", CountryList.class);
		    for (Country c : countryList.getCountryList()) {
		        LOGGER.info("Country from list: {}", c);
		    }
		}


	}
