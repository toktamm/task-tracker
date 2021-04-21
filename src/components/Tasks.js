const tasks = [
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

const Tasks = () => {
  return (
    <>

      {tasks.map((task) => (<h3>{task.text}</h3>))}

    </>
  )
}

export default Tasks;