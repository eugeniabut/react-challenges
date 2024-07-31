import Task from './Task'

import { useState } from 'react'

const Tasks = ({tasks, onDelete, onToggle}) => {
    
  return (
    <div>
      {tasks.map((task)=>(
        <Task key ={task.id}  task={task} onDelete = {onDelete} onToggle={onToggle} />
      ) )}
    </div>
  )
}

export default Tasks