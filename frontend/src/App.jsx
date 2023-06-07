import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { getTasks } from "./lib/apiClient";
import TaskForm from "./screens/TaskForm";
import TasksView from "./screens/TasksView";
import Login from "./components/Login";

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
  <TaskForm arr={students}/>
  );
};

//export default StudentTable;



export default App;
