import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { getTasks, sendVideo } from "./lib/apiClient";
import TaskForm from "./screens/TaskForm";
import TasksView from "./screens/TasksView";
import Login from "./components/Login";
//import VideoUploader from "./components/VideoUploader";

export const DataContext = React.createContext({});

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then((tasksFromServer) => {
      console.log(tasksFromServer);
      setTasks(tasksFromServer);
    });
  }, []);
  
  let students = [{id:5635127,color:"jhdjs"},{id:345678,color:"sdfghjk"}]

  const handleVideoUpload = (event) => {
    const file = event.target.files[0];
    sendVideo(file);
    // Do something with the video file
    console.log("Uploaded video:", file);
  };

  return (
    <>
    <DataContext.Provider
      value={{
        tasks: tasks,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/tasks" element={<TasksView />} />
          <Route path="/task-form/:id?" element={<TaskForm />} />
        </Routes>
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
      </BrowserRouter>
    </DataContext.Provider>
  <TaskForm arr={students}/>
  </>
  );
};

//export default StudentTable;



export default App;
