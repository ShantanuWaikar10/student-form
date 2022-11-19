import React, {useEffect, useState} from 'react'
import {Table, TableHead, TableRow, TableCell, TableBody, styled} from '@mui/material';
import {db} from '../firebase-config'
import {collection, getDocs} from 'firebase/firestore';

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
`

const THead = styled(TableRow)`
  background: #000000;
  & > th{
    color: #fff;
    font-size: 20px;
  }
`

const AllStudents = () => {

  const [students, setStudents] = useState([]);

  const studentsCollectionRef = collection(db, "students")

  useEffect(() => {
    const getStudents = async() => {
      const data = await getDocs(studentsCollectionRef);
      setStudents(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
    }
    getStudents();
  },[])

  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>Name</TableCell>
          <TableCell>Department</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Mobile</TableCell>
          <TableCell>Address</TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {
          students.map((student) => {
            return(<TableRow>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.department}</TableCell>
              <TableCell>{student.email}</TableCell>
              <TableCell>{student.mobile}</TableCell>
              <TableCell>{student.address}</TableCell>
            </TableRow>)
          })
        }
      </TableBody>
    </StyledTable>
  )
}

export default AllStudents