const Todo = ({ inputRef, taskListRef }) =>{
    const tasksList = [];

    const onAddTasks = (inputRef, taskListRef) => {
        const value = inputRef.current.value;
        tasksList.push(value);
        tasksList.forEach((value) =>{
            const paragraph = document.createElement('p');
            paragraph.textContent = value;
            paragraph.className = "rounded-lg  text-white text-2xl";
            taskListRef.current.appendChild(paragraph);
            tasksList = [];
        })
    }  

    return(
        <div className="inline">
            <button onClick={() => onAddTasks(inputRef,taskListRef)} className="bg-green-500 mt-4 w-1/3 text-white text-xl p-2">Agregar Tareas</button>
        </div>
    )
}

export default Todo;
