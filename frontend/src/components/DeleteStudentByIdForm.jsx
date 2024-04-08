import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import Button from '@mui/material/Button';
import axios from "axios";

export default function DeleteStudentByIdForm() {

    const paperStyle = {padding:'50px 20px',width:600,margin:"20px auto"}
    const [id,setId] = useState()
    
    const deleteById = ()=> {
        axios.delete("http://localhost:3000/api/student/deleteById/"+id)
        .then(response=>{
            alert("The current student has been deleted!")
        })
        .catch(error =>{
            alert("Error!")
        })
    }




  return (
<div>  
    <Box>
    <Paper elevation={3}  style={paperStyle}> 
    <h1 style={{color:"blue"}}><u>Delete Student</u></h1>
      <TextField id="outlined-basic" label="Student ID" variant="outlined" fullWidth value={id} onChange={(e)=>setId(e.target.value)} />
      <Box sx={{ height: 16 }} /> {/* 添加16px的垂直间距 */}
      <Button variant="contained" onClick={deleteById}>Delete</Button>
    <p><a href="/">HomePage</a></p>
    </Paper>
  </Box>
</div>
  )
}

