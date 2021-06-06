import './App.css';
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';
import React, { useState } from 'react';

const initialState = [
  'Buy some bread',
  'Do a kata',
  'Go for a run'
]

function App() {
  const [todos, setTodos] = useState(initialState)

  const handleTodos = (todoItem) => {
    setTodos([...todos, todoItem[0]]);
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm handleTodos={handleTodos} />
      <Todo todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
