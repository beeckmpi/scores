import React from 'react';
import cssModules from 'react-css-modules';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import { connect } from 'react-redux';
import style from './teams.styl';
import Login from '../Login/Login';
import asteroid from '../../common/asteroid';

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
const Teams = (props) => {
  const { } = props;
  const teams = () => {
    if (user && user.username) {
      return (
            <section styleName="Teamscontainer">
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
      );
    }
    return <Login />;
  };
  return <div>{teams()}</div>;
};

Home.propTypes = {
  todos: React.PropTypes.array.isRequired,
  dispatchCallAddTodo: React.PropTypes.func.isRequired,
  user: React.PropTypes.object,
};

const mapStateToProps = state => ({

});
const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(cssModules(Teams, style));
