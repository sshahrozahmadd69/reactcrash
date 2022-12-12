import {useState} from 'react'



const Task = () => {
  const [tasks, setTasks] = useState([
    {
    id: 1,
    text:'Foodshopping',
    day:'Feb 5th at 2:30',
    reminder:'true'
    },
    {
    id: 2,
    text:'study',
    day:'Feb 5th at 2:30',
    reminder:'true'
    },
    {
            id: 4,
            text:'eating',
            day:'Feb 5th at 2:30',
            reminder:'true'
    },
])
  return (
    <>
    {tasks.map((task) => (
    <h3 key={task.id}>  {task.text}</h3>))}
    </>
  )
}

export default Task