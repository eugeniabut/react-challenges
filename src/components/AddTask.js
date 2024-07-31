import { useState } from "react";

function AddTask({onAdd}) {
    const [text, setText]= useState("")
    const [day,setDay]= useState("")
    const [remeinder,setRemeinder]=useState(false)

    const onSubmit =(e)=>{
      e.preventDefault()

      if(!text){
        alert("Please enter a task")
      }

      onAdd({text,day,remeinder})

      setText("");
      setDay("");
      setRemeinder(false)
    }
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control form-control-check">

        <label>Task</label>
        <input 
        type="text" 
        placeholder="add task"
        value={text}
        onChange={(e)=>setText(e.target.value)}/>
       

        <label>Day & Time</label>
        <input 
        type="text" 
        placeholder="day and time"
        value={day}
        onChange={((e)=>setDay(e.target.value))}/>

        <label>Remeinder</label>
        <input type="checkbox"
       
        checked = {remeinder}
        onChange={((e)=>setRemeinder(e.currentTarget.checked))}
        />
      </div>

      <input  className="btn btn-blok" type="submit" value="save task"/>
    </form>
  );
}

export default AddTask;
