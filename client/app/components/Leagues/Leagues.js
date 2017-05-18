import React from 'react';
import cssModules from 'react-css-modules';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import { connect } from 'react-redux';
import style from './leagues.styl';
import Login from '../Login/Login';
import asteroid from '../../common/asteroid';
import {Link} from 'react-router-dom';

import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const Leagues = (props) => {
  const { user } = props;
  const leagues = () => {
    if (user && user.username) {
      return (
            <section styleName="SectionContainer">
              <div styleName="catTitle">Leagues</div>
                <RaisedButton
                  href="/"
                  label="Add League"
                  containerElement={<Link to="/Leagues/add" />}
                  secondary={true}
                  icon={<FontIcon className="muidocs-icon-custom-github" />}
                  styleName="addButton"
                />
              <Paper styleName="subCat">
                <h4>My Leagues</h4>
                <div style={{minHeight:"110pt", marginBottom: '20pt'}}></div>
              </Paper>
              <Paper styleName="subCat">
                <h4>All Leagues</h4>
                <div style={{minHeight:"110pt"}}></div>
              </Paper>
            </section>
      );
    }
    return "";
  };
  return <div>{leagues()}</div>;
};

Leagues.propTypes = {
  user: React.PropTypes.object,
};

const mapStateToProps = state => ({
  user: state.user,
});
const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(cssModules(Leagues, style));
