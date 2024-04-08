import React from 'react'
import Appbar from '../components/Appbar'


export default function Homepage() {





  return (
    <div>
    <Appbar />
    <p><a href="/add">Add Student</a></p>
    <br />
    <p><a href="/showAll">Show All Students</a></p>
    <br />
    <p><a href="/findByName">Find Students By Name</a></p>
    <br />
    <p><a href="/deleteById">Delete Student By ID</a></p>
    <br />
    </div>

  )
}
