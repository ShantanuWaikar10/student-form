import React, {useState, useEffect} from 'react';
import { FormControl, FormGroup, Input, InputLabel, Typography, styled, Button } from '@mui/material';
import {db} from '../firebase-config'
import {collection, addDoc} from 'firebase/firestore';
import {useNavigate} from "react-router-dom"
// import { addStudent } from '../service/api';

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div{
    margin-top: 20px;
  }
`

const AddStudent = () => {
  const [newName, setNewName] = useState("");
  const [newDepartment, setNewDepartment] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newMobile, setNewMobile] = useState("");
  const [newAddress, setNewAddress] = useState("");


  const navigate = useNavigate();

  const studentsCollectionRef = collection(db, "students")

  const addStudentDetails = async() =>{
    await addDoc(studentsCollectionRef, {name:newName, department:newDepartment, email:newEmail, mobile:newMobile, address:newAddress});
    navigate("/allstudents");
  }

  return (
    <Container>
    <Typography variant='h4'>Add Student</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => setNewName(e.target.value)} name="name"/>
      </FormControl>
      <FormControl>
        <InputLabel>Department</InputLabel>
        <Input onChange={(e) => setNewDepartment(e.target.value)} name="department"/>
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => setNewEmail(e.target.value)} name="email"/>
      </FormControl>
      <FormControl>
        <InputLabel>Mobile</InputLabel>
        <Input onChange={(e) => setNewMobile(e.target.value)} name="mobile"/>
      </FormControl>
      <FormControl>
        <InputLabel>Address</InputLabel>
        <Input onChange={(e) => setNewAddress(e.target.value)} name="address"/>
      </FormControl>
      <FormControl>
        <Button variant='contained' onClick={() => addStudentDetails()}>Add Student</Button>
      </FormControl>
    </Container>
  )
}

export default AddStudent  