import Tasklist from "./Tasklist"



const Task = ({tasks}) => {
 
  return (
    <>
    {tasks.map((task) => (
    <Tasklist key={task.id} task={task} />))}
    </>
  )
}

export default Task