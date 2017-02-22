import React, {
  Component
} from 'react';

import {
  Router,
  Route,
  browserHistory
} from 'react-router';
import './App.css';
import Layout from './components/layout'
import Home from './components/home'
import Projects from './components/projects'
import Examples from './components/examples'
import Scroll from './components/example/iscroll'
import Todos from './components/example/todos/index'


class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
          <Route path='/' component={Layout}>
            <Route path='home' component={Home}></Route>
            <Route path='projects' component={Projects}></Route>
            <Route path='examples' component={Examples}></Route>
            <Route path='examples/Iscroll' component={Scroll}></Route>
            <Route path='examples/todos' component={Todos}></Route>
          </Route>
      </Router>

    );
  }
}

export default App;