package com.cognizant.springlearn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication          // scans all sub‑packages automatically
public class CountryServiceApplication {
    public static void main(String[] args) {
        SpringApplication.run(CountryServiceApplication.class, args);
    }
}
