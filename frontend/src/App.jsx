import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import UploadVideo from "./screens/uploadVideo";
import BasicTable from "./screens/BasicTable";
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

  return (
    <>
    <DataContext.Provider
      value={{
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<UploadVideo/>} />
          <Route exact path="/table" element={<BasicTable/>} />
        </Routes>
        
      </BrowserRouter>
    </DataContext.Provider>
  </>
  );
};

//export default StudentTable;



export default App;
