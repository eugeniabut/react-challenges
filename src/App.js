import Header from "./components/Header";
import "./index.css"
import Tasks from "./components/Tasks";
import { useState } from 'react'

function App() {
  const [tasks, setTasks]= useState([{
    id:1,
    text: "Doctor appointment",
    day: "15/7/2024",
    remeinder:false
},{
    id:2,
    text: "Meeting",
    day: "16/7/2024",
    remeinder:false
},{
    id:3,
    text: "Einkaufen",
    day: "17/7/2024",
    remeinder:false
}
])

  const title = "Task Tracker"

const deleteTask =(id)=>{
  setTasks( tasks.filter((task)=>task.id !==id))

}

  return (
    <div className="App">
     <Header title = {title} />
     {tasks.length >0 ?     <Tasks tasks={tasks} onDelete = {deleteTask}/> :"no tasks to show" }
 
  
    </div>
  );
}

export default App;
