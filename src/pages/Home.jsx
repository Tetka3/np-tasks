import { useState } from 'react';
import Navbar from '../components/Navbar';
import Tasks from '../components/Tasks';
import './styles.css'
import AddTasks from '../components/AddTasks';

const Home = () => {

    const [tasks, setTasks] = useState([
        {
            id: 1, 
            title: "First Post",
            body: "This is the body of the first post"
        },
        {
            id: 2, 
            title: "Second Post",
            body: "This is the body of the second post"
        }
    ])
    
    const addTasks = (task) => {
        const id = Math.floor(Math.random() * 10000 + 1)
        const newTask = { id, ...task}        
        setTasks([...tasks, newTask])        
    } 

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }
  return (
    <div className="home">
        <Navbar /> 
        <AddTasks onAdd={addTasks}/>
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/>: 'No Tasks To Show'}         
    </div>
  )
}

export default Home;
