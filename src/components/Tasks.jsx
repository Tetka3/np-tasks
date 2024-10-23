import Task from "./Task"
import './style.css'

const Tasks = ({ tasks, onDelete }) => {
  return (
    <div className="tasks">
        {
            tasks.map(task => (<Task task={task} key={task.id} onDelete={onDelete}/>))
        }   
    </div>
  )
}

export default Tasks
