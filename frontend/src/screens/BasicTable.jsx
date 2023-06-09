
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
const SERVER_URL = "http://localhost:8000";



export default function BasicTable() {
  const params = useLocation()
  let navigate = useNavigate();

  const arr =  params.state?.arr;
  const path =  params.state?.path;

  return (
    <div className="page" style={{backgroundColor: '#f2f2f2', height: '100vh'}}>
      <div  style={{ backgroundColor: '#f2f2f2', flexDirection: 'row', display:'flex', justifyContent: 'right',height:"10vh",padding:".5vw"  }}>
       <IconButton
        onClick={() => {
          navigate("/");
        }}
        style={{
          borderRadius: '50%', // Makes the button round
          backgroundColor: '#29245B', // Example background color
          color: 'white', // Example text color
          padding: '8px', // Example padding
          border: 'none', // Example border styles
          cursor: 'pointer', // Example cursor style
          display: 'flex', // Align icon and text horizontally
          alignItems: 'center', // Align icon and text vertically
          
        }}
      >
        <ArrowForwardIcon />
      </IconButton>
        </div>
    
      {/* <video src={`./${path}`} width={"10vw"} height="10vh"/> */}
      <TableContainer component={Paper} sx={{ width: '90vw', margin: "5vh 5vw", justifyContent: 'center', height: '90vh' }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: "lightblue" }}>
            <TableRow>
                   <TableCell
                align="center"
                style={{ fontWeight: 'bold', width: '20vw', height: '5vw', fontSize: '1.2em' }}
              >
                 תואם למידע ממשרד התחבורה
              </TableCell>
              <TableCell
                align="center"
                style={{ fontWeight: 'bold', width: '20vw', height: '5vw', fontSize: '1.2em' }}
              >
                 צבע רכב שזוהה
              </TableCell>
              <TableCell
                align="center"
                style={{ fontWeight: 'bold', width: '20vw', height: '5vw', fontSize: '1.2em' }}
              >
                 סוג רכב
              </TableCell>
              <TableCell
                align="center"
                style={{ fontWeight: 'bold', width: '20vw', height: '5vw', fontSize: '1.2em' }}
              >
                מספר רישוי
              </TableCell>
              <TableCell
                align="center"
                style={{ fontWeight: 'bold', width: '20vw', height: '5vw', fontSize: '1.2em' }}
              >
                תמונה
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {arr?arr.map((row, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 }, height: '5vw' }}
              >
              <TableCell
                component="th"
                scope="row"
                align="center"
                style={{ fontSize: '1.1em', color: row.notes === true ? 'green' : 'red' }}
              >
              {row.notes === true ? <CheckIcon /> : <ClearIcon />}
              </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  align="center"
                  style={{ fontSize: '1.1em' }}
                >
                {row.color||"לא נמצא צבע הרכב"}
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  align="center"
                  style={{ fontSize: '1.1em' }}
                >
                  {row.vehicle}
                </TableCell>
                <TableCell
                  component="th"
                  scope="row"
                  align="center"
                  style={{ fontSize: '1.1em' }}
                >
                  {row.plate}
                </TableCell>
                <TableCell
                component="th"
                scope="row"
                align="center"
                style={{ fontSize: '1.1em' }}
              >
                <img src={`${SERVER_URL}${row.image}`} width="200px"/>
              </TableCell>
              </TableRow>
            )):<div></div>}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
  );
  
}