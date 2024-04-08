package com.example.TestDatabase.Service;

import com.example.TestDatabase.entity.Student;

import java.util.List;

public interface StudentService {

    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
    public void deleteById(int id);
    public Student findByName(String name);
}
