import React from "react";
import { sendVideo } from "../lib/apiClient";
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


//import VideoUploader from "./components/VideoUploader";

export const DataContext = React.createContext({});

function UploadVideo() {

  let navigate = useNavigate();

  
  const submit = async () => {
    var file = document.getElementById("video-upload-input").files[0];
    console.log('file: ', file);
    if (file) {
      var filereader = new FileReader();
      filereader.readAsDataURL(file);
      filereader.onload =  async function (evt) {
        let base64 = evt.target.result;
        let video_data = await sendVideo(base64);
  
        navigate('table', { state: { arr: video_data } });
      }
      
      // Do something with the video file
    };
  }

  return (
    <>
      <DataContext.Provider
        value={{

        }}
      >


        <Box component="span" sx={{ width: '80vw', margin: "10vw", p: 6, border: '1px dashed grey' }}>
          <Button>


            Save

          </Button>
        </Box>
        <div style={{ background: "#f5f5f5", padding: "20px", position: "relative" }} sx={{ width: '80vw', margin: "10vw" }}></div>
        <div>
          <label htmlFor="label-video-upload-input">Upload Video:</label>
          <input
            type="file"
            id="video-upload-input"
            accept="video/*"
            style={{ display: "none" }}
            onChange={submit}
          />
          <Button
            onClick={() => {
              document.getElementById("video-upload-input").click();
            }}

          >
            Select Video

          </Button>

        </div>

      </DataContext.Provider>

    </>
  );
};


//export default StudentTable;



export default UploadVideo;
