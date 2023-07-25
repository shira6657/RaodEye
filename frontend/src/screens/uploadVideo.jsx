import React, { useState } from "react";
import { sendVideo } from "../lib/apiClient";
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import roadEyeLogo from "../assets/RoadEye.png";
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import open from "../assets/open.png";
import text from "../assets/text.png";

import CircularProgress from '@mui/material/CircularProgress';


export const DataContext = React.createContext({});

function UploadVideo() {
  let [loading, setLoading] = useState(false)
  let navigate = useNavigate();


  const submit = async () => {
    setLoading(true)
    var file = document.getElementById("video-upload-input").files[0];
    console.log('file: ', file);
    if (file) {
      var filereader = new FileReader();
      filereader.readAsDataURL(file);
      filereader.onload = async function (evt) {
        let base64 = evt.target.result;
        let video_data = await sendVideo(base64);
        setLoading(false)
        if (video_data!="err")navigate('table', { state: { arr: video_data, } });
      }

    };
  }

  return (
    <>
      <DataContext.Provider
        value={{

        }}
      >

{loading ?
  <div style={{display:"flex",justifyContent:"center",width:"100vw",height:"100vh",marginTop:"45vh"}}>
    <CircularProgress />
    </div> :
    <>

        <div style={{ background: "#DEEEF6", padding: "20px", position: "relative", height: "650px", display: "flex", justifyContent: "center" }} sx={{ width: '80vw', margin: "10vw", height: "50px" }}>


          <img
            src={roadEyeLogo}
            alt="RoadEye"
            style={{ position: "absolute", top: "20px", left: "20px", width: "90px", height: "70px" }}
          />

          <input
            type="file"
            id="video-upload-input"
            accept="video/*"
            style={{ display: "none" }}
            onChange={submit}
          />

        <div style={{display:"flex",flexDirection:"column",height:"400px",width:"900px"}}>
          <img
            src={open}
            alt="welcome"
            style={{
              marginTop: "80px",
              marginLeft: "80px",
              width: "700px",
              height: "200px"
            }}
          />
          <img
            src={text}
            alt="myText"
            style={{
              marginLeft: "100px",
              width: "540px",
              height: "200px"
            }}
          />
</div>
          


          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              '& > :not(style)': {
                m: 1,
                width: 350,
                height: 450,
                backgroundColor: '#69B7C1'


              },
            }}
          >

            <Paper elevation={3}>


              <label
                htmlFor="label-video-upload-input"
                style={{
                  fontFamily: 'Geologica, Bold',
                  fontSize: '25px',
                  color: '#DEEEF6',
                  marginTop: '100px',
                  marginLeft: '100px',
                  fontFamily:"sans-serif/bold",
                  fontWeight:"bolder"
                }}
              >
                Here you can<br /> upload a video:
              </label>

              <Stack spacing={2} direction="row">

                <Button
                  variant="contained"
                  align="center"
                  style={{
                    background: "#29235C",
                    fontFamily: 'Poppins',
                    top: '180px',
                    left: '110px',
                    fontSize: '14px',
                    padding: '12px 24px'
                  }}
                  onClick={() => {
                    document.getElementById("video-upload-input").click();
                  }}

                >
                  Select Video

                </Button>

              </Stack>
            </Paper>
          </Box>



        </div>
        </>}

      </DataContext.Provider>

    </>
  );
};

export default UploadVideo;
