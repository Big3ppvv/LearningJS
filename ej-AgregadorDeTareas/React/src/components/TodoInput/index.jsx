import React from 'react';

const TodoInput = ({ onAddTodo }) => {
  const inputRef = React.useRef()
  const submitHandler = () => {
    if (inputRef.current.value === ''){
      alert("Tienes que agregar un texto")
      return
    }
    const todo = {
      text: inputRef.current.value,
      id: Math.floor(Math.random() * Math.pow(10, 8)).toString(),
      completed: false
    }
    onAddTodo(todo)
    inputRef.current.value = ""
  }

  return (
    <div className="inline">
        <input className="h-10" type="text" name="tasks" id="input-value" ref={inputRef} placeholder={"placeHolderText"} />
        <button onClick={submitHandler} className="bg-green-500 mt-4 w-1/3 text-white text-xl p-2">Agregar Tareas</button>
    </div>
  )
}

export default TodoInput;
