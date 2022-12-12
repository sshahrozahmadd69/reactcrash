import {useState} from 'react'
import Header from "./components/Header";
import Task from "./components/Task";
function App() {
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
    <div className='container'>
   <Header />
   <Task tasks= {tasks}/>
    </div>
    
  );
}

export default App;
