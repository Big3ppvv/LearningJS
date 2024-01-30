import { useState } from "react";
import ShowOrDelete from "../ShowOrDelete";

const AddTasks = () =>{
    const [tasks, setTasks] = useState('')
    const placeHolderText = "Escribe algo aqui";
    return(
        <div className="bg-slate-200 p-8 mt-36 m-auto w-1/2 h-96 rounded-lg text-2xl text-center">
            <h2 className="mb-8"><strong>Mis Tareas</strong></h2> 
            <div>
                <input className="h-10" type="text" name="tasks" id="input-value" placeholder={placeHolderText}/>
                <ShowOrDelete insertTasks={setTasks} tasks={tasks}/>
            </div>
            <div className="bg-slate-950 w-50 text-white text-xl rounded-lg" id="task-list"></div>
        </div>
    )
}

export default AddTasks
