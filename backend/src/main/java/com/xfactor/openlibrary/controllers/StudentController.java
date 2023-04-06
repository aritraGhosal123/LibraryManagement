package com.xfactor.openlibrary.controllers;

import java.util.*;
import java.util.Optional;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.xfactor.openlibrary.domain.Student;
import com.xfactor.openlibrary.repositories.StudentRepository;

@RestController
@RequestMapping("students")
public class StudentController {
    private StudentRepository studentRepository;

    public StudentController(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

    @PostMapping("/saveStudent")
    public Student saveStudent(@RequestBody Student student) {
        if (student.getId() == null) {
         Student student2 = studentRepository.save(student);
            return student2;
        }
       return null;

    }

    @PutMapping("/updateStudent")
    public Student updateStudent(@RequestBody Student student) {
        if (student.getId() != null) {
            Student student2 = studentRepository.save(student);
            return student2;
        }
        return null;

    }   

    @GetMapping("/getAll")
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    @GetMapping("findById/{id}")
    public Student findById(@PathVariable Long id) {
        Optional<Student> optionalOfStudent = studentRepository.findById(id);
        if (optionalOfStudent.isPresent()) {
            return optionalOfStudent.get();
        }
        return null;
    }

    @GetMapping("findTotal")
    public Long findTotal() {
        return studentRepository.count();
    }

    @DeleteMapping("delete/{id}")
    public void deleteBook(@PathVariable Long id) {
        studentRepository.deleteById(id);
    }

    @GetMapping("findByRollNumber/{rollNumber}")
    public List<Student> findByRollNumber(@PathVariable String rollNumber) {
        List<Student> students = studentRepository.findByRollNumber(rollNumber);
        return students;
    }

}