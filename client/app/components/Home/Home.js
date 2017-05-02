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
    img: 'images/grid-list/00-52-29-429_640.jpg',
    title: 'Breakfast',
    author: 'jill111',
  },
  {
    img: 'images/grid-list/burger-827309_640.jpg',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'images/grid-list/camera-813814_640.jpg',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'images/grid-list/morning-819362_640.jpg',
    title: 'Morning',
    author: 'fancycrave1',
  },
  {
    img: 'images/grid-list/hats-829509_640.jpg',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'images/grid-list/honey-823614_640.jpg',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'images/grid-list/vegetables-790022_640.jpg',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'images/grid-list/water-plant-821293_640.jpg',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
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
  const home = () => {
    if (user && user.username) {
      return (
        <div styleName="todo-wrapper">
          <div styleName="ContentContainer">
            <section styleName="homecontainer">
              <GridList
                cellHeight={180}
                style={styles.gridList}
                cols={6}
              >
                <Subheader>Featured leagues</Subheader>
                {tilesData.map((tile) => (
                  <GridTile
                    key={tile.img}
                    title={tile.title}
                    subtitle={<span>by <b>{tile.author}</b></span>}
                    actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                  >
                    <img src={tile.img} />
                  </GridTile>
                ))}
              </GridList>
            </section>
          </div>
        </div>
      );
    }
    return <Login />;
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

export default connect(mapStateToProps, mapDispatchToProps)(cssModules(Home, style));
