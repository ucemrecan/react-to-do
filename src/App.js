import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CreateToDo from './components/CreateToDo';
import ToDos from './components/ToDos';
import { useState } from "react";


function App() {

  // States
  const [tasks, setTasks] = useState([]);
  const [bodyColor, setBodyColor] = useState("#C0DEFF !important");
  const [containerBg, setContainerBg] = useState(false);


  // Add Task
  function addTask(newTask) {
    setTasks( prevTasks => {
      return [...prevTasks, newTask];
    });
  }

  // Delete Task
  function deleteTask(id) {
    setTasks( prevTasks => {
      return prevTasks.filter( (item, index) => {
        return index !== id;
      });
    });

  }

  function modeClick() {
    setBodyColor(bodyColor === '#C0DEFF !important' ? '#2B3467 !important;' : '#C0DEFF !important');
    setContainerBg(!containerBg);
  }




  // Return
  return (
    <div className="container-fluid">
      <style jsx>{`
        body {
          background-color: ${bodyColor};
        }
      `}</style>

        {/* Burası gece modu için statelenecek */}
        <div id={containerBg ? "modeSelection" : ""} className="bg-white ps-5 pe-5 rounded-4 shadow-lg todoDiv">
          <Header  
            modeClick={modeClick}
          />
          <CreateToDo 
            addTask={addTask}
            />
          
          {tasks.map( (task, index) => {
            return (
              <ToDos 
                key={index}
                id={index}
                item= {task}
                deleteTask={deleteTask}
              />
            )
          })}
          

        </div>
          
    </div>
  )
}

export default App;
