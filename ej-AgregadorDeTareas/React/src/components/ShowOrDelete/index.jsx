const ShowOrDelete = ({ insertTasks, tasks }) =>{
    const onAddTasks = (insertTasks, tasks) =>{
        const input = document.getElementById('input-value').value;
        insertTasks(input)
        const tasksDiv = <p>{tasks}</p>;  
    }

    return(
        <div className="inline">
            <button onClick={() => onAddTasks(insertTasks, tasks)} className="bg-green-500 mt-4 w-1/2 text-white text-xl p-2">Agregar Tareas</button>
        </div>
    )
}

export default ShowOrDelete
