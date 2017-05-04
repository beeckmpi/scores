import React from 'react';
import cssModules from 'react-css-modules';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import style from './main.styl';
import Login from '../Login/Login';
import asteroid from '../../common/asteroid';
import { connect } from 'react-redux';
import SearchIcon from 'material-ui/svg-icons/action/search';
import {Link} from 'react-router-dom';

import Drawer from 'material-ui/Drawer';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const Main = (props) => {
  const { user } = props;
  const handleLogout = () => {
    asteroid.logout();
  };
  const main = () => {
    if (user && user.username) {
      return (
          <div styleName="mainPage">
            <Drawer open={true} width={130} containerStyle={{backgroundColor: '#004D40', padding: '15pt 0pt'}}>
              <div styleName="ScoreTitle"><Link to="/">Scores!</Link></div>
                <div styleName="MenuLists">
                  <List>
                    <ListItem  style={{color:"#fff"}} primaryText="Live" />
                  </List>
                  <List>
                    <ListItem style={{color:"#fff"}} containerElement={<Link to="/Leagues/index" />} primaryText="Leagues" />
                    <ListItem style={{color:"#fff"}} primaryText="Clubs" />
                    <ListItem style={{color:"#fff"}} containerElement={<Link to="/Teams" />}  primaryText="Teams" />
                    <ListItem style={{color:"#fff"}} primaryText="Players" />
                  </List>
                </div>
            </Drawer>
            <div styleName="menubar">
              <div styleName="SearchBar"><SearchIcon style={{color:'#777'}}/> <span style={{paddingBottom: "5pt"}}>Search</span></div>
              <div styleName="logout">
                 <RaisedButton onClick={handleLogout} primary={true} styleName="logout-button" label={user.username} />
              </div>
            </div>
          </div>
      );
    }
    return <Login />
  };
  return main();
};

Main.propTypes = {
  user: React.PropTypes.object,
};
const mapStateToProps = state => ({
  user: state.user,
});
export default connect(mapStateToProps)(cssModules(Main, style));
