import Button from "./Button"
const Header = ({title, onAdd, showAdd}) => {

  return (
    <div>
        <h1> {title}</h1>
        <Button color = {showAdd? "red": "green"} 
        text = {showAdd? "Close":"Add"} 
        onClick={onAdd} /> 
     
    </div>
  )
}

export default Header