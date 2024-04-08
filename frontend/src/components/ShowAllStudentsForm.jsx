import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import axios from "axios";
import Button from '@mui/material/Button';

export default function ShowAllStudentsForm() {
    const paperStyle = {padding:'50px 20px',width:600,margin:"20px auto"}
    const [students, setStudents] = useState([]);

    const getStudents = () => {
        axios.get("http://localhost:3000/api/student/getAll")
        .then(response => {
            setStudents(response.data);
        })
        .catch(error => {
            console.log("Error!");
        });
    }

    return (
        <div>
            <Box>
                <Paper elevation={3}  style={paperStyle}> 
                    <h1 style={{color:"blue"}}><u>Show All Students:</u></h1>
                    <Button variant="contained" onClick={getStudents}>Show All</Button>
                    <p><a href="/">HomePage</a></p>
                    {/* Render the list of students */}
                    <ul>
                        {students.map(student => (
                            <li key={student.id}>
                                <p>ID: {student.id}</p>
                                <p>Name: {student.name}</p>
                                <p>Address: {student.address}</p>
                            </li>
                        ))}
                    </ul>
                </Paper>
            </Box>
        </div>
    )
}
