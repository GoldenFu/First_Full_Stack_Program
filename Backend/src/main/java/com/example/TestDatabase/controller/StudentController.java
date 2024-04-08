package com.example.TestDatabase.controller;


import com.example.TestDatabase.Service.StudentService;
import com.example.TestDatabase.entity.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public String add(@RequestBody Student student) {
        studentService.saveStudent(student);
        System.out.println("New student is added!");
        return "New student is added!";
    }


    @GetMapping("/getAll")
    public  List<Student> getAllStudent(){
        System.out.println(studentService.getAllStudents());
        return studentService.getAllStudents();
    }


    @DeleteMapping(value = "/deleteById/{id}")
    public void deleteById(@PathVariable Integer id){
        studentService.deleteById(id);
        System.out.println("The "+ id +" student has been deleted.");
    }


    @GetMapping("/getStudentByName/{name}")
    public  Student getStudentByName(@PathVariable String name ){
        try {
            return  studentService.findByName(name);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }


}
