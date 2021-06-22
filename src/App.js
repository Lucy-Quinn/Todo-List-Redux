import React from 'react';
import TodoListApp from './components/TodoListApp/TodoListApp';
import SingleTodoPage from './components/SingleTodoPage/index';
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyle from './components/GlobalStyle';
import { useSelector } from 'react-redux';

import { Route, Switch } from 'react-router-dom';


function App() {
  const { toggleTheme, themes } = useSelector(state => state.themeReducer);
  const theme = toggleTheme ? themes.light : themes.dark;
  return (
    <Router>
      <div>
        <GlobalStyle theme={theme} />
        <Switch>
          <Route exact path="/" component={TodoListApp} />
          <Route exact path="/todos/:todoId" component={SingleTodoPage} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
