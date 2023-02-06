import { Alert } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import StudentForm from './StudentForm'

const CreateStudentComponent = () => {
  const [formValues, setFormValues] = useState({ name: '', email: '', rollno: '' })

  // onSubmit handler
  const onSubmit = studentObject => {
    console.log(setFormValues(formValues));
    axios.post("http://localhost:5000/students/create-student", studentObject)
      .then(res => {
        if (res.status === 200) {
          <Alert severity='info'>Added Data sucessfully </Alert>
          alert("Student sucessfully created")
        } else {
          Promise.reject()
        }
      }).catch(err => alert("something went wrong"))
  }

  return (
    <StudentForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize
    >
      add student
    </StudentForm>
  )
}

export default CreateStudentComponent