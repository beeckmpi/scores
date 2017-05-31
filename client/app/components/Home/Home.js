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
import { callAddLeague } from '../Leagues/LeagueAsyncActions';

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
    name: 'Jupiler Pro League',
    country: 'Belgium',
    region: 'National',
    division: 'first',
    founded: '1892',
    website: 'http://jupilerproleague.be',
    tile: 'gridItem shown'
  },
  {
    name: 'Eredivisie',
    country: 'The Netherlands',
    region: 'National',
    division: 'first',
    founded: '1892',
    website: 'http://eredivisie.nl',
    tile: 'gridItem shown'
  },
  {
    name: 'Premier League',
    country: 'England',
    region: 'National',
    division: 'first',
    founded: '1892',
    website: 'https://www.premierleague.com',
    tile: 'gridItem shown'
  },
  {
    name: 'Primera Division',
    country: 'Spain',
    region: 'National',
    division: 'first',
    founded: '1892',
    website: 'http://www.laliga.es/',
    tile: 'gridItem shown'
  },
  {
    name: 'Seria A',
    country: 'Italy',
    region: 'National',
    division: 'first',
    founded: '1892',
    website: 'http://www.legaseriea.it',
    tile: 'gridItem shown'
  },
  {
    name: 'Bundesliga',
    country: 'Germany',
    region: 'National',
    division: 'first',
    founded: '1892',
    website: 'http://bundesliga.com',
    tile: 'gridItem shown'
  },
  {
    name: 'Ligue 1',
    country: 'France',
    region: 'National',
    division: 'first',
    founded: '1892',
    website: 'http://www.ligue1.com/',
    tile: 'gridItem shown'
  },
  {
    name: 'Premiership',
    country: 'Scotland',
    region: 'National',
    division: 'first',
    founded: '1892',
    website: 'http://jupilerproleague.be',
    tile: 'gridItem shown'
  },
  {
    name: 'Superligaen',
    country: 'Denmark',
    region: 'National',
    division: 'first',
    founded: '1892',
    website: 'http://jupilerproleague.be',
    tile: 'gridItem shown'
  },
  {
    name: 'Ekstraklasa',
    country: 'Poland',
    region: 'National',
    division: 'first',
    founded: '1892',
    website: 'http://jupilerproleague.be',
    tile: 'gridItem shown'
  },
  {
    name: 'Bundesliga',
    country: 'Austria',
    region: 'National',
    division: 'first',
    founded: '1892',
    website: 'http://jupilerproleague.be',
    tile: 'gridItem shown'
  },
  {
    name: 'Super League',
    country: 'Switserland',
    region: 'National',
    division: 'first',
    founded: '1892',
    website: 'http://jupilerproleague.be',
    tile: 'gridItem shown'
  },
  {
    name: 'SuperLeague',
    country: 'Greece',
    region: 'National',
    division: 'first',
    founded: '1892',
    website: 'http://jupilerproleague.be',
    tile: 'gridItem shown'
  },
  {
    name: 'Tippeligaen',
    country: 'Norway',
    region: 'National',
    division: 'first',
    founded: '1892',
    website: 'http://jupilerproleague.be',
    tile: 'gridItem shown'
  },
  {
    name: 'Allsvenskan',
    country: 'Sweden',
    region: 'National',
    division: 'first',
    founded: '1892',
    website: 'http://jupilerproleague.be',
    tile: 'gridItem shown'
  },
  {
    name: 'Veikkausliiga',
    country: 'Finland',
    region: 'National',
    division: 'first',
    founded: '1892',
    website: 'http://jupilerproleague.be',
    tile: 'gridItem shown'
  },
  {
    name: 'First Football League',
    country: 'Croatia',
    region: 'National',
    division: 'first',
    founded: '1892',
    website: 'http://jupilerproleague.be',
    tile: 'gridItem shown'
  },
  {
    name: 'Liga',
    country: 'Czech',
    region: 'National',
    division: 'first',
    founded: '1892',
    website: 'http://jupilerproleague.be',
    tile: 'gridItem shown'
  },
];
let styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    overflowY: 'auto',
  },
  gridItem: {
    position: 'relative'
  }
};

const Home = (props) => {
  const { todos, user, dispatchCallAddLeague, leagues } = props;
  const handleLogout = () => {
    asteroid.logout();
  };
  const handleClick = (e) => {
    console.log(e.currentTarget.id);
    leagues.map((tile) => {
      if(e.currentTarget.id==tile.message.name+'_'+tile.message.country){
        if (tile.message.tile == 'gridItem shown'){
          tile.message.tile = "gridItem active";
        } else {
          tile.message.tile = 'gridItem shown';
        }
      } else {
        if (tile.message.tile != "gridItem hidden"){
          tile.message.tile = "gridItem hidden";
        } else {
          tile.message.tile = 'gridItem shown';
        }
      }
    });
  }

  const home = () => {
    if (user && user.username) {
      tilesData.map((tile) => {
        var exists = 'FALSE';
        leagues.map((league) => {
          if (tile.name == league.message.name && tile.country == league.message.country){
            exists = 'TRUE';
            console.log('1 _ '+exists);
          }
        })
        console.log('2 _ '+exists);
        if(exists == 'FALSE'){
          dispatchCallAddLeague(tile);
        }
      });
      return (
        <div styleName="todo-wrapper">
          <div styleName="ContentContainer">
            <section styleName="homecontainer">
              <div styleName="catTitle">Home</div>
              <div className="gridcontainer">
                {leagues.map((tile) => (
                  <Paper key={tile.id} id={tile.message.name+'_'+tile.message.country} style={styles.gridItem} className={tile.message.tile} onClick={(e) => handleClick(e)}>
                    <section id="info" className="info">
                      <div className="infoTitle">{tile.message.name}</div>
                      <div className="infocountry">{tile.message.country}</div>
                    </section>
                    <section id="placeholder" className="placeholder">&nbsp;</section>
                    <section className="extraInfo">
                      <div className="details">
                        <div><strong>Region:</strong></div>
                        <div>{tile.message.region}</div>
                      </div>
                      <div className="details">
                        <div><strong>Division:</strong></div>
                        <div>{tile.message.division}</div>
                      </div>
                      <div className="details">
                        <div><strong>Founded:</strong></div>
                        <div>{tile.message.founded}</div>
                      </div>
                      <div className="details">
                        <div><strong>Website:</strong></div>
                        <div><a href="{tile.message.website}">{tile.website}</a></div>
                      </div>
                    </section>
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
  leagues: React.PropTypes.array.isRequired,
  dispatchCallAddLeague: React.PropTypes.func.isRequired,
  user: React.PropTypes.object,
};

const mapStateToProps = state => ({
  todos: state.todos,
  user: state.user,
  leagues: state.leagues,
});
const mapDispatchToProps = dispatch => ({
  dispatchCallAddLeague: data => dispatch(callAddLeague(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(cssModules(Home, style, {allowMultiple: true}));
