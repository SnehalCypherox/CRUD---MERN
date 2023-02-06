import React from 'react'
import { Button } from '@mui/material'
import axios from 'axios'
import { Link } from 'react-router-dom'

const StudentTableRow = ({ props }) => {
  const { id, name, email, rollno } = props.obj;
    const deleteStudent = () => {
        axios.delete("http://localhost:4000/students/delete-student/" + id)
            .then((res) => {
                if (res.status === 200) {
                    alert("Student sucessfully Deleted")
                } else {
                    Promise.reject();
                }
            }).catch(err => alert("something went wrong"))
    }
    return (
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{rollno}</td>
            <td>
                <Link className="edit-link" to={"/update-student/" + id}>
                    Edit
                </Link>
                <Button onClick={deleteStudent} size='medium' variant="contained" color='error'>
                    Delete
                </Button>
            </td>
        </tr>
    )
}

export default StudentTableRow