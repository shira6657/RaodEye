import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import UploadVideo from "./screens/uploadVideo";
import BasicTable from "./screens/BasicTable";
//import VideoUploader from "./components/VideoUploader";

export const DataContext = React.createContext({});

function App() {

  

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
