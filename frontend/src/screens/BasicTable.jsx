import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useLocation, useNavigate, useParams } from 'react-router-dom';



function createData(
  name,
  color
) {
  return { name, color };
}


export default function BasicTable() {
  const params = useLocation()
  let navigate = useNavigate();

  const arr =  params.state.arr;
  return (
<<<<<<< HEAD:frontend/src/screens/TaskForm.jsx
    <>
      <TableContainer component={Paper} sx={{ width: '80vw', margin: "10vw" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: "lightgreen" }}>
            <TableRow>
            <TableCell align="center" style={{fontWeight: 'bold'}}>צבע רכב</TableCell> {/* Align content in the middle */}
            <TableCell align="center" style={{fontWeight: 'bold'}}>מספר רישוי</TableCell>
=======
    <>  
    <button onClick={()=>{
      navigate('/');
    }}>back</button>
    <TableContainer component={Paper} sx={{width:'80vw',margin:"10vw"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{backgroundColor:"lightgreen"}}>
          <TableRow >
            <TableCell >ID</TableCell>
            <TableCell >Color</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {arr.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell >{row.color}</TableCell>
>>>>>>> 2046e992ba8e6c5788780241adf370af9352af3e:frontend/src/screens/BasicTable.jsx
            </TableRow>
          </TableHead>
          <TableBody>
            {arr.map((row, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row" align="center" >{row.color}</TableCell> 
                <TableCell component="th" scope="row" align="center">{row.id}</TableCell>
             
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
  
}
