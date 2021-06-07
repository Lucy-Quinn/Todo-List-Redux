import './App.css';
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';
import React, { useState } from 'react';

const initialState = [
  {
    text: 'Buy some bread',
    complete: false
  },
  {
    text: 'Do a kata',
    complete: false
  },
  {
    text: 'Go for a run',
    complete: false
  }
]

function App() {
  const [todos, setTodos] = useState(initialState)

  const handleTodos = (todoItem) => {
    setTodos([...todos, { text: todoItem[0], complete: false }]);
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
