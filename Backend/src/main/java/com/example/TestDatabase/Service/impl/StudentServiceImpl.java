package com.example.TestDatabase.Service.impl;

import com.example.TestDatabase.Service.StudentService;
import com.example.TestDatabase.entity.Student;
import com.example.TestDatabase.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class StudentServiceImpl implements StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Student saveStudent(Student student) {

        return studentRepository.save(student);
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    @Override
    public void deleteById(int id) {

        try {
            studentRepository.deleteById(id);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }

    }

    @Override
    public Student findByName(String name) {
        return studentRepository.findByName(name);
    }


}
