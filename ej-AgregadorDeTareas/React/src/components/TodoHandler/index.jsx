import { useState } from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import TodoInput from '../TodoInput'
import TodoList from '../TodoList'

const TodoHandler = (props) => {
  const [todos, setTodos] = useState([])
  // { text: "Hacer la cama", id: 1, completed: false }
  const handleDeleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !==id ))
  }
  
  const handleCompleteTodo = (id) => {
    setTodos((prev) => prev.map((todo) => todo.id === id ? {...todo, completed: true} : todo))
  }

  return (
    <div className="bg-slate-200 p-8 mt-36 m-auto w-1/2 h-96 rounded-lg text-2xl text-center">
      <h2 className="mb-8"><strong>Mis Tareas</strong></h2>
      <TodoInput onAddTodo={(todo) => setTodos((prev) => ([...prev, todo]))}/>
      <div className="h-full w-full bg-slate-300" id="task-list">
          <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} onCompleteTodo={handleCompleteTodo} />
      </div>
    </div>
  )
}

export default TodoHandler
