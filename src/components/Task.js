import { FaTimes } from "react-icons/fa"

const Task = ({task, onDelete}) => {
  return (
    <div className='task'>
  <h2> {task.text} <FaTimes onClick={(()=>onDelete(task.id))} style={{color:"red", cursor:"pointer"}}/></h2>
  <h3> {task.day}</h3>

</div>
  )
}

export default Task