import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

const INITIALSTATE = [
  {
    id: '1',
    text: 'Buy some bread',
    complete: false,
  },
  {
    id: '2',
    text: 'Do a kata',
    complete: false
  },
  {
    id: '3',
    text: 'Go for a run',
    complete: false
  }
]

function App() {

  const [todos, setTodos] = useState(INITIALSTATE);

  const addTodoHandler = (todoItem) => {
    setTodos([...todos, { id: uuidv4(), text: todoItem, complete: false }]);
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm addTodoHandler={addTodoHandler} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
