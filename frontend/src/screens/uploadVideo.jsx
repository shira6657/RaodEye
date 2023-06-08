import React from "react";
import {  sendVideo } from "../lib/apiClient";
import { useNavigate } from 'react-router-dom';

//import VideoUploader from "./components/VideoUploader";

export const DataContext = React.createContext({});

function UploadVideo() {
    
    let navigate = useNavigate();
  
  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    console.log('file: ', file);
    sendVideo(file);
    let students = [{id:5635127,color:"jhdjs"},{id:345678,color:"sdfghjk"}]

    navigate('table' , {state: {arr:students}});
    // Do something with the video file
    console.log("Uploaded video:", file);
  };

  return (
    <>
    <DataContext.Provider
      value={{
       
      }}
    >
        <div>
          <label htmlFor="label-video-upload-input">Upload Video:</label>
          <input
            type="file"
            id="video-upload-input"
            accept="video/*"
            style={{ display: "none" }}
            onChange={handleVideoUpload}
          />
          <button
            onClick={() => {
              document.getElementById("video-upload-input").click();
            }}
          >
            Select Video
          </button>
        </div>
 
    </DataContext.Provider>
 
  </>
  );
};

//export default StudentTable;



export default UploadVideo;
