package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.demo.entity.Employee;
import com.example.demo.service.EmployeeService;


@SpringBootApplication
public class SpringDataJpaDemoApplication implements CommandLineRunner {

    @Autowired
    private EmployeeService employeeService;

    public static void main(String[] args) {
        SpringApplication.run(SpringDataJpaDemoApplication.class, args);
    }

    public void run(String... args) throws Exception {
        Employee emp = new Employee();
        emp.setName("Rajat");
        emp.setEmail("rajat@example.com");

        employeeService.addEmployee(emp);
        System.out.println("Employee added successfully!");
    }
}



