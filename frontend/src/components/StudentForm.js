import React from 'react'
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { FormGroup, Button, FormLabel, Paper } from '@mui/material'

const StudentForm = (props) => {
    // validation
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Required"),
        email: Yup.string().email("Please Enter Valid Email").required("Required"),
        rollno: Yup.number().positive("Invalid Roll number").integer("Invalid Roll number").required("Required"),
    });
    console.log(props);
    return (
        <div className='form-wrapper'>
            <Formik {...props} validationSchema={validationSchema}>
                <Paper elevation={5} className="card">
                    <Form>
                        <FormGroup>
                            <FormLabel> Name :</FormLabel>
                            <Field name='name' type='text' className='form-control'></Field>
                            <ErrorMessage name='name' className='error invalid-feedback' component="span" />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel> Email :</FormLabel>
                            <Field name='email' type='email' className='form-control' />
                            <ErrorMessage name='email' className='error invalid-feedback' component="span" />
                        </FormGroup>
                        <FormGroup>
                            <FormLabel> Roll No :</FormLabel>
                            <Field name='rollno' type='number' className='form-control' />
                            <ErrorMessage name='rollno' className='error invalid-feedback' component="span" />
                        </FormGroup>
                        <Button variant="contained" type='submit' color="info" className='btn'>
                            {props.children}
                        </Button>
                    </Form>
                </Paper>

            </Formik>
        </div>
    )
}

export default StudentForm
