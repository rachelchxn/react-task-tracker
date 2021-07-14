import { render } from "@testing-library/react";
import { useState } from "react"
import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false); 
  const [tasks, setTasks] = useState([])

  // useEffect(() => {
  //   const fetchTasks = async () => {
  //     const res = await fetch('http://localhost:3001/tasks')
  //     const data = await res.json()

  //     console.log(data)
  //   }
  //   fetchTasks()
  // }, [])


// Delete Task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

// Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task)=> task.id === id ? {...task, reminder: !task.reminder} : task))
  }

// Add Task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) +1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }
  
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}
      />
      ) : ('No Tasks To Show'
      )}
    </div>
  )
} 



export default App;