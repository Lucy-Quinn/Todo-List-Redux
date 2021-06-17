import React from 'react';
import TodoListApp from './components/TodoListApp/TodoListApp';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <TodoListApp />
    </Provider>
  );
}

export default App;
