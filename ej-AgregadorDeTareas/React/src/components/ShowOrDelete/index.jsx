import AddTasks from "../AddTasks";
import { createRoot } from 'react-dom/client'; 

const ShowOrDelete = ({ insertTasks, tasks }) =>{

    const onAddTasks = (insertTasks, tasks) =>{
      const input = document.getElementById('input-value').value;
      insertTasks(input);
      const paragraph = <p className="text-xl rounded-lg w-1/2">{tasks}</p>;
      const container = document.getElementById('task-list');
      const root = createRoot(container);
      root.render(paragraph);
    }

    return(
        <div className="inline">
            <button onClick={() => onAddTasks(insertTasks, tasks)} className="bg-green-500 mt-4 w-1/2 text-white text-xl p-2">Agregar Tareas</button>
        </div>
    )
}

export default ShowOrDelete;
