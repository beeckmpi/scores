import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './store';

//routes
import Home from './components/Home/Home';
import Main from './components/Main/Main';
import Leagues from './components/Leagues/Leagues';
import addLeague from './components/Leagues/Add';
import Teams from './components/Teams/Teams';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <MuiThemeProvider>
        <div>
          <Main />
          <section style={{marginLeft:"95pt"}}>
            <Route exact path="/" component={Home}/>
            <Route path="/Leagues/index" component={Leagues} />
            <Route path="/Leagues/add" component={addLeague} />
            <Route path="/Teams" component={Teams} />
          </section>
        </div>
      </MuiThemeProvider>
    </Router>
  </Provider>
, document.getElementById('app'));
