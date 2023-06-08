import React from "react";
import { sendVideo } from "../lib/apiClient";
import { useNavigate } from 'react-router-dom';

//import VideoUploader from "./components/VideoUploader";

export const DataContext = React.createContext({});

function UploadVideo() {

  let navigate = useNavigate();

  const submit = () => {
    var file = document.getElementById("fileInput").files[0];
    if (file) {
      var filereader = new FileReader();
      filereader.readAsDataURL(file);
      filereader.onload = function (evt) {
        var base64 = evt.target.result;
        sendVideo(base64);
      }
      let students = [{ id: 5635127, color: "jhdjs" }, { id: 345678, color: "sdfghjk" }]

      navigate('table', { state: { arr: students } });
      // Do something with the video file
    };
  }

    return (
      <>
        <DataContext.Provider
          value={{

          }}
        >
          <div>
            <label htmlFor="label-video-upload-input">Upload Video:</label>
            <input type="file" id="fileInput" name="file" multiple onChange={() => submit()} />
          </div>

        </DataContext.Provider>

      </>
    );
  };

  //export default StudentTable;



  export default UploadVideo;
