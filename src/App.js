import Header from "./components/Header";
import "./index.css";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState, useEffect } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  const title = "Task Tracker";

  const [showAddTask, setShowAddTask] = useState(false);

  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    setTasks([...tasks, data]);

    //const id =Math.floor(Math.random() *1000 +1)
    //const newTask = {id, ...task}
    //setTasks([...tasks, newTask])
  };
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleRemeinder = async (id) => {
    const taskToToggle = await fetchTasks(id);

    const updTask = { ...taskToToggle, remeinder: !taskToToggle.remeinder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method: "PUT",
      headers:{
        "Content-type":"application/json"
      },
      body: JSON.stringify(updTask)


    } )

    const data = await res.json()

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, remeinder: !data.remeinder } : task
      )
    );
  };

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromserver = await fetchTasks();
      setTasks(tasksFromserver);
    };
    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    return data;
  };

  return (
    <div className="App">
      <Header
        title={title}
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />

      {showAddTask && <AddTask onAdd={addTask} />}

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemeinder} />
      ) : (
        "no tasks to show"
      )}
    </div>
  );
}

export default App;
