import React from 'react';
import cssModules from 'react-css-modules';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import { connect } from 'react-redux';
import style from './teams.styl';
import Login from '../Login/Login';
import asteroid from '../../common/asteroid';

import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const Teams = (props) => {
  const { user } = props;
  const teams = () => {
    if (user && user.username) {
      return (
        <section styleName="SectionContainer">
          <div styleName="catTitle">Teams</div>
          <Paper styleName="subCat">
            <h4>My teams</h4>
            <div style={{minHeight:"110pt", marginBottom: '20pt'}}></div>
          </Paper>
          <Paper styleName="subCat">
            <h4>All teams</h4>
            <div style={{minHeight:"110pt"}}></div>
          </Paper>
        </section>
      );
    }
    return '';
  };
  return <div>{teams()}</div>;
};

Teams.propTypes = {
  user: React.PropTypes.object,
};

const mapStateToProps = state => ({
  user: state.user,
});
const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(cssModules(Teams, style));
