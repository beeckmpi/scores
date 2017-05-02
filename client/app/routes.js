import React from 'react';
import { Route} from 'react-router-dom';
import Main from './components/Main/Main';
import Teams from './components/Teams/Teams';
import Home from './components/Home/Home';

export default (
  <Route path="/" component={Main}>
    <Route exact path="/" component={Home}/>
    <Route path="Teams" component={Teams} />
  </Route>
);
