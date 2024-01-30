import React from 'react'
import ReactDOM from 'react-dom/client'



const ShowOrDelete = ({ insertTasks, tasks }) =>{
    const addTasksToComplete = () =>{
        const input = document.getElementById('input-value').value;
        insertTasks(input)
        const tasksDiv = <div className="bg-slate-950 text-white text-xl rounded-lg"><p>{tasks}</p></div>;
        ReactDOM.render(
            tasksDiv,
            document.getElementById('task-container')
        )
    }

    return(
        <div className="inline">
            <button onClick={() => addTasksToComplete(insertTasks, tasks)} className="bg-green-500 text-white text-xl p-2">Agregar Tareas</button>
        </div>
    )
}

export default ShowOrDelete