import { useState } from "react";


import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {

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

// Delete Task
const deleteTask = (id) => {
setTasks(tasks.filter((task) => task.id !== id ))
}



  return (
    
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>

  );
}

export default App;
