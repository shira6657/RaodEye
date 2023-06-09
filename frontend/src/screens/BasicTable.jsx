
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useLocation, useNavigate, useParams } from 'react-router-dom';



export default function BasicTable() {
  const params = useLocation()
  let navigate = useNavigate();

  const arr =  params.state?.arr;
  const path =  params.state?.path;

  return (
    <div className="page" style={{ backgroundColor: '#f2f2f2', height: '100vh', justifyContent: 'center'  }}>
     <button
        onClick={() => {
          navigate("/");
        }}
        style={{
          borderRadius: '50%', // Makes the button round
          backgroundColor: '#29245B', // Example background color
          color: 'white', // Example text color
          padding: '8px 12px', // Example padding
          border: 'none', // Example border styles
          cursor: 'pointer', // Example cursor style
          display: 'flex', // Align icon and text horizontally
          alignItems: 'center', // Align icon and text vertically
        }}
      >
        <span style={{ marginRight: '3px', fontWeight: 'bold' }}>&#9664;</span>
      </button>
      {/* <video src={`./${path}`} width={"10vw"} height="10vh"/> */}
      <TableContainer component={Paper} sx={{ width: '80vw', margin: "10vw", justifyContent: 'center', height: '60vh' }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: "lightblue" }}>
            <TableRow>
              <TableCell align="center" style={{ fontWeight: 'bold', width: '20vw', height: '5vw', fontSize: '1.2em' }}
                >הערות</TableCell>
              <TableCell
                align="center"
                style={{ fontWeight: 'bold', width: '20vw', height: '5vw', fontSize: '1.2em' }}
              >
                צבע רכב
              </TableCell>
              <TableCell
                align="center"
                style={{ fontWeight: 'bold', width: '20vw', height: '5vw', fontSize: '1.2em' }}
              >
                מספר רישוי
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
                  style={{ fontSize: '1.1em' }}
                >
                  
                  {row.notes}
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
                  {row.plate}
                </TableCell>

              </TableRow>
            )):<div></div>}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
  );
  
}