package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.model.Country;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CountryController {

    private final ApplicationContext ctx =
            new ClassPathXmlApplicationContext("country.xml");

    @GetMapping("/country")
    public Country getCountryIndia() {
        return ctx.getBean("country", Country.class);
    }

    @GetMapping("/countries")
    public List<Country> getAllCountries() {
        return ctx.getBean("countryList", List.class);
    }
}
