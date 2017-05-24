import React from 'react';
import cssModules from 'react-css-modules';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import { connect } from 'react-redux';
import style from './home.styl';
import Animations from './animations.css'
import TodoContainer from '../Todo/TodoContainer'
import Login from '../Login/Login';
import asteroid from '../../common/asteroid';
import SearchIcon from 'material-ui/svg-icons/action/search';

//test
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import { callAddTodo } from '../../components/Todo/TodoAsyncActions';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const tilesData = [
  {
    title: 'Jupiler Pro League',
    author: 'Belgium',
  },
  {
    title: 'Eredivisie',
    author: 'The Netherlands',
  },
  {
    title: 'Premier League',
    author: 'England',
  },
  {
    title: 'Primera Division',
    author: 'Spain',
  },
  {
    title: 'Seria A',
    author: 'Italy',
  },
  {
    title: 'Bundesliga',
    author: 'Germany',
  },
  {
    title: 'Ligue 1',
    author: 'France',
  },
  {
    title: 'Premiership',
    author: 'Scotland',
  },
  {
    title: 'Superligaen',
    author: 'Denmark',
  },
  {
    title: 'Ekstraklasa',
    author: 'Poland',
  },
  {
    title: 'Bundesliga',
    author: 'Austria',
  },
  {
    title: 'Super League',
    author: 'Switserland',
  },
  {
    title: 'SuperLeague',
    author: 'Greece',
  },
  {
    title: 'Tippeligaen',
    author: 'Norway',
  },
  {
    title: 'Allsvenskan',
    author: 'Sweden',
  },
  {
    title: 'Veikkausliiga',
    author: 'Finland',
  },
  {
    title: 'First Football League',
    author: 'Croatia',
  },
  {
    title: 'Liga',
    author: 'Czech',
  },
];
const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    overflowY: 'auto',
  },
};
const Home = (props) => {
  const { todos, dispatchCallAddTodo, user } = props;
  const handleAddTodo = (e) => {
    if (e.key === 'Enter') {
      const elem = e.target;
      e.preventDefault();
      if (elem.value) {
        dispatchCallAddTodo(elem.value);
        elem.value = '';
      }
    }
  };
  const handleLogout = () => {
    asteroid.logout();
  };
  const handleClick = (e) => {
    console.log(e.currentTarget);
    e.currentTarget.className = "gridItem active";
  }

  const home = () => {
    if (user && user.username) {
      return (
        <div styleName="todo-wrapper">
          <div styleName="ContentContainer">
            <section styleName="homecontainer">
              <div styleName="catTitle">Home</div>
              <div className="gridcontainer">
                {tilesData.map((tile) => (
                  <Paper key={tile.title+'_'+tile.author} className="gridItem" onClick={(e) => handleClick(e)}>
                    <section id="info" className="info">
                      <div className="infoTitle">{tile.title}</div>
                      <div className="infoAuthor">{tile.author}</div>
                    </section>
                    <section id="placeholder" className="placeholder">&nbsp;</section>
                  </Paper>
                ))}
              </div>
            </section>
          </div>
        </div>
      );
    }
    return "";
  };
  return <div>{home()}</div>;
};

Home.propTypes = {
  todos: React.PropTypes.array.isRequired,
  dispatchCallAddTodo: React.PropTypes.func.isRequired,
  user: React.PropTypes.object,
};

const mapStateToProps = state => ({
  todos: state.todos,
  user: state.user,
});
const mapDispatchToProps = dispatch => ({
  dispatchCallAddTodo: data => dispatch(callAddTodo(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(cssModules(Home, style, {allowMultiple: true}));
