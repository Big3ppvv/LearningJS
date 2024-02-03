import React from 'react'

const TodoList = ({ todos, onDeleteTodo, onCompleteTodo }) => {
  const getClassName = (completed) => completed ? "text-green-700 line-through" : "text-slate-800"
  
  return (
    <div className="flex flex-col items-start p-8 w-full">
      {todos.map((todo) => {
        return (
        <div className="flex gap-8">
          <button className="rounded-full p-4 bg-red-500 text-white" onClick={() => onDeleteTodo(todo.id)}>X</button>
          <button className="rounded-full p-4 bg-green-500 text-white" onClick={() => onCompleteTodo(todo.id)}>Listo</button>
          <p key={todo.id} className={getClassName(todo.completed)}>{todo.text}</p>
        </div>
      )})}
    </div>
  )
}

export default TodoList;
