import React from 'react';

import {
  Router,
  Route,
  hashHistory,
  IndexRoute
} from 'react-router';

import './App.css';
import Layout from './components/layout'
import Home from './components/home'
import Projects from './components/projects'
import Business from './components/business'
import Skills from './components/skills'
import Examples from './components/examples'
import Scroll from './components/example/iscroll'
import Todos from './components/example/todos/index'


class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
          <Route path='/' component={Layout}>
            <IndexRoute component={Home} />
            <Route path='home' component={Home}></Route>
            <Route path='projects' component={Projects}></Route>
            <Route path='business' component={Business}></Route>
            <Route path='skills' component={Skills}></Route>
            <Route path='examples' component={Examples}></Route>
            <Route path='examples/Iscroll' component={Scroll}></Route>
            <Route path='examples/todos' component={Todos}></Route>
          </Route>
      </Router>
    );
  }
}

export default App;