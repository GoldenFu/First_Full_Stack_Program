import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import Button from '@mui/material/Button';
import axios from "axios";


export default function AddStudentForm() {
    const paperStyle = {padding:'50px 20px',width:600,margin:"20px auto"}
    const [name,setName] = useState('')
    const [address,setAddress] = useState('')
    

    const handleClick = ()=>{
        const newStudent = {
            name:name,
            address: address

        }

        axios.post("http://localhost:3000/api/student/add", newStudent)
        .then(response => {
            console.log('New Student Added!')
        })
        .catch(error => {
            console.log("Error!")
        })
    }


    return (
    <Box>
      <Paper elevation={3}  style={paperStyle}> 
      <form action="">
      <h1 style={{color:"blue"}}><u>Add Student</u></h1>
        <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth value={name} onChange={(e)=>setName(e.target.value)} />
        <Box sx={{ height: 16 }} /> {/* 添加16px的垂直间距 */}
        <TextField id="outlined-basic" label="Student Address" variant="outlined" fullWidth value={address} onChange={(e)=>setAddress(e.target.value)} />
        <Box sx={{ height: 16 }} /> {/* 添加16px的垂直间距 */}
        <Button variant="contained" onClick={handleClick}>Submit</Button>
      </form>
      <p><a href="/">HomePage</a></p>
      </Paper>
    </Box>
  );
}
