import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import TodoListPage from './pages/TodoListPage/TodoListPage';
import SingleTodoPage from './pages/SingleTodoPage/index';
import GlobalStyle from './components/GlobalStyle';

function App() {
  const { toggleTheme, themes } = useSelector(state => state.themeReducer);
  const theme = toggleTheme ? themes.light : themes.dark;

  return (
    <Router>
      <div>
        <GlobalStyle theme={theme} />
        <Switch>
          <Route exact path="/" component={TodoListPage} />
          <Route exact path="/todos/:todoId" component={SingleTodoPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
