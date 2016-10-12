import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

// import App from './App';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Main from './Main';
import Resume from './components/Resume.js';
import ShortBio from './components/ShortBio.js';
import FullBio from './components/FullBio.js';
import Diplomas from './components/Diplomas.js';


injectTapEventPlugin();

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Resume}>
      <IndexRoute component={ShortBio} />
      <Route path="/shortbio" component={ShortBio} />
      <Route path="/fullbio" component={FullBio} />
      <Route path="/diplomas" component={Diplomas} />
    </Route>
  </Router>
), document.body)

