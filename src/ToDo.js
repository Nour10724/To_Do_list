import {useState} from "react"
import "./App.css"

const ToDo =()=>{

    const [inputValue,setInputValue] =useState("")
    const [tasks,setTasks] =useState([
        "learn react",
        "go to gym",
        "eat beack fast"

    ])
   

    const handleClick=()=>{
        setTasks([...tasks,inputValue])
        setInputValue("")
    }
    const handlRemoveItem=(index)=>{
    setTasks(tasks.filter((_,i)=>i !==index))
    }
    return(
        <div className="App">
<h3>TO DO LIST </h3>
<div className="container">
    <ul>
    {tasks.map((task,index)=>{
        return<li key={index}>{task} <button onClick={()=>handlRemoveItem(index)}>remove</button></li>
    })}
</ul>
<input onChange={(e)=>setInputValue(e.target.value)} value={inputValue} type="text"/>
<button onClick={handleClick}>add task</button>
</div>

        </div>
    )

}
export default ToDo