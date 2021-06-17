import React, { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoAddForm from './components/TodoAddForm';
import TodoList from './components/TodoList';
import { TodoListAppWrapper, TodoListAppCenter, TodoAppHeader } from './App.styled';
import GlobalStyle from './globalStyles';
import ToggleButton from './components/ToggleButton';
import { ThemeContext } from './contexts/ThemeContext';
import { Provider } from 'react-redux';
import store from './redux/store';

const INITIALSTATE = [
  {
    id: '1',
    text: 'Buy some bread',
    complete: false,
    edit: false
  },
  {
    id: '2',
    text: 'Do a kata',
    complete: false,
    edit: false
  },
  {
    id: '3',
    text: 'Go for a run',
    complete: false,
    edit: false
  }
]

function App() {

  const [todos, setTodos] = useState(INITIALSTATE);
  const { isLightTheme, themes } = useContext(ThemeContext);
  const theme = isLightTheme ? themes.light : themes.dark;

  const addTodoHandler = (todoItemText) => {
    setTodos([...todos, { id: uuidv4(), text: todoItemText, complete: false, edit: false }]);
  }

  return (
    <Provider store={store}>
      <TodoListAppWrapper>
        <TodoListAppCenter>
          <GlobalStyle theme={theme} />
          <ToggleButton />
          <TodoAppHeader>I've Got To Do This</TodoAppHeader>
          <TodoAddForm addTodoHandler={addTodoHandler} />
          <TodoList todos={todos} setTodos={setTodos} />
        </TodoListAppCenter>
      </TodoListAppWrapper>
    </Provider>
  );
}

export default App;
