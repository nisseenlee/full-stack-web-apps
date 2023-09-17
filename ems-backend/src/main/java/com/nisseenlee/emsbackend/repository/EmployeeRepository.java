package com.nisseenlee.emsbackend.repository;

import com.nisseenlee.emsbackend.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
