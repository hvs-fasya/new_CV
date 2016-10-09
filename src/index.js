import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

// import App from './App';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from './Main';
import Resume from './components/Resume.js';


injectTapEventPlugin();

ReactDOM.render((
  <Router>
    <Route path="/" component={Resume}>
      
    </Route>
  </Router>
), document.body)

