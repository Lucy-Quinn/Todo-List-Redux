import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import SingleTodoPage from './pages/SingleTodoPage';
import TodoListsPage from './pages/TodoListsPage';
import SingleTodoListPage from './pages/SingleTodoListPage';
import GlobalStyle from './components/GlobalStyle';
import Navbar from './components/Navbar';
import StatisticsPage from './pages/StatisticsPage/StatisticsPage';

function App() {

  const { toggleTheme, themes } = useSelector(state => state.themeReducer);
  const theme = toggleTheme ? themes.light : themes.dark;

  return (
    <Router>
      <div>
        <GlobalStyle theme={theme} />
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/todos/:todoId" component={SingleTodoPage} />
          <Route exact path="/todoLists" component={TodoListsPage} />
          <Route exact path="/todoLists/:todoListId" component={SingleTodoListPage} />
          <Route exact path="/statistics" component={StatisticsPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
