import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import Button from '@mui/material/Button';
import axios from "axios";

export default function FindStudentByNameForm() {

  const paperStyle = {padding:'50px 20px',width:600,margin:"20px auto"}
  const [student,setStudent] = useState('')
  const [name,setName] = useState('')

  const findByName = ()=>{

    axios.get("http://localhost:3000/api/student/getStudentByName/"+name)
    .then(response => {
      setStudent(response.data)
    })
    .catch(
      error =>{
        console.log('Error!')
      }
    )


  }



  return (
    <div>
      <Box>
      <Paper elevation={3}  style={paperStyle}> 
      <h1 style={{color:"blue"}}><u>Search Student</u></h1>
        <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth value={name} onChange={(e)=>setName(e.target.value)} />
        <Box sx={{ height: 16 }} /> {/* 添加16px的垂直间距 */}
        <Button variant="contained" onClick={findByName}>Submit</Button>
      <p><a href="/">HomePage</a></p>
      <li key={student.id}>
          <p>ID: {student.id}</p>
          <p>Name: {student.name}</p>
          <p>Address: {student.address}</p>
      </li>
      </Paper>
    </Box>
    </div>
  )
}
