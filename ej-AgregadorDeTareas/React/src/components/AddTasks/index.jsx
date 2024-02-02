import { useRef } from 'react'
import ShowOrDelete from "../ShowOrDelete";
import { AiOutlineCloseCircle } from "react-icons/ai";

const AddTasks = () =>{
    const inputRef = useRef('');
    const taskListRef = useRef('');
    const placeHolderText = "Escribe algo aqui";
    
    return(
        <div className="bg-slate-200 p-8 mt-36 m-auto w-1/2 h-96 rounded-lg text-2xl text-center">
            <h2 className="mb-8"><strong>Mis Tareas</strong></h2> 
            <div>
                <input className="h-10" type="text" name="tasks" id="input-value" ref={inputRef} placeholder={placeHolderText}/>
                <ShowOrDelete inputRef={inputRef} taskListRef={taskListRef}/>
            </div>
            <div className=" grid bg-slate-950 w-1/2 text-white text-xl rounded-lg leading-4" id="task-list" ref={taskListRef}>
                
            </div>
        </div>
    )
}

export default AddTasks
