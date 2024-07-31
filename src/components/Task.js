import { FaTimes } from "react-icons/fa"

const Task = ({task, onDelete, onToggle}) => {
  return (
    <div className={`task ${task.remeinder? "remeinder" : "" }`}
     onDoubleClick={()=>onToggle(task.id)}>
  <h2> {task.text} <FaTimes onClick={(()=>onDelete(task.id))} style={{color:"red", cursor:"pointer"}}/></h2>
  <h3> {task.day}</h3>

</div>
  )
}

export default Task