import { useState } from 'react';
import './style.css';


const AddTasks = ({ onAdd }) => {

    const [posts, setPosts] = useState('')
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleBodyChange = (e) => {
        setBody(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(!title && !body) {
            alert('Add a title & text')
            return
        }

        onAdd({title, body})
        setTitle('')
        setBody('')
    }

  return (
    <form className='formData' onSubmit={handleSubmit}>
        <div className='title'>
            <label>Add Title</label>
            <input 
                type="text" 
                placeholder="Add a Title"
                value={title}
                onChange={handleTitleChange}
            />
        </div>
        <div className='postBody'>
            <label>Post's Body</label>
            <textarea 
                type="text"
                value={body}
                onChange={handleBodyChange}
            />
        </div> 
        <button >Add Post</button>     
    </form>
  )
}

export default AddTasks

