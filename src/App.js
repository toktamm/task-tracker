import { useState } from "react";


import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";


function App() {

  const [showAddTask, SetShowAddTask] = useState(false);

  const [tasks, setTasks] = useState(
    [
      {
        "id": 1,
        "text": "Doctors Appointment",
        "day": "May 5th at 2:30pm",
        "reminder": true
      },
      {
        "id": 2,
        "text": "Standup Meeting",
        "day": "May 6th at 1:30pm",
        "reminder": true
      },
      {
        "id": 3,
        "text": "Grocery Shopping",
        "day": "May 6th at 1:30pm",
        "reminder": false
      }
    ]
  )


  // Add Task
  const addTask = (task) => {

    const id = Math.floor(Math.random() * 10000) + 1

    const newTask = { id, ...task }

    setTasks([...tasks, newTask])

  }


  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }


  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (

    <div className="container">
      <Header />
      {showAddTask && <AddTask onAdd={addTask} />}
      { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : "No Tasks To Display"}
    </div>

  );
}

export default App;
