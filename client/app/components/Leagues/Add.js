import React from 'react';
import cssModules from 'react-css-modules';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-redux';
import style from './leagues.styl';
import Login from '../Login/Login';
import asteroid from '../../common/asteroid';

import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const addLeagues = (props) => {
  const { user } = props;
  const form = () => {
    if (user && user.username) {
      return (
        <section styleName="SectionContainer">
          <div styleName="catTitle">Add League</div>
          <Paper styleName="subCat">
            <div>
              <TextField name="leaguename" floatingLabelText="League Name" />
            </div>
            <div>
              <SelectField
                floatingLabelText="Country"
              >
                <MenuItem value={1} primaryText="Austria" />
                <MenuItem value={1} primaryText="Belgium" />
                <MenuItem value={1} primaryText="Cech Republic" />
                <MenuItem value={5} primaryText="Croatia" />
                <MenuItem value={1} primaryText="Denmark" />
                <MenuItem value={2} primaryText="England" />
                <MenuItem value={1} primaryText="Finland" />
                <MenuItem value={3} primaryText="France" />
                <MenuItem value={4} primaryText="Germany" />
                <MenuItem value={1} primaryText="Greece" />
                <MenuItem value={1} primaryText="Hungary" />
                <MenuItem value={5} primaryText="Italy" />
                <MenuItem value={5} primaryText="Ireland" />
                <MenuItem value={1} primaryText="Luxembourg" />
                <MenuItem value={5} primaryText="Nortern Ireland" />
                <MenuItem value={1} primaryText="Norway" />
                <MenuItem value={1} primaryText="Polen" />
                <MenuItem value={5} primaryText="Portugal" />
                <MenuItem value={1} primaryText="Romania" />
                <MenuItem value={5} primaryText="Scotland" />
                <MenuItem value={1} primaryText="Serbia" />
                <MenuItem value={1} primaryText="Slovakia" />
                <MenuItem value={1} primaryText="Slovenia" />
                <MenuItem value={5} primaryText="Spain" />
                <MenuItem value={1} primaryText="Sweden" />
                <MenuItem value={5} primaryText="Switserland" />
                <MenuItem value={5} primaryText="The Netherlands" />
                <MenuItem value={5} primaryText="Wales" />
              </SelectField>
            </div>
            <div>
              <SelectField
                floatingLabelText="Regional/National"
              >
                <MenuItem value={1} primaryText="National" />
                <MenuItem value={1} primaryText="Provincial" />
                <MenuItem value={1} primaryText="Regional" />
              </SelectField>
            </div>
          </Paper>
        </section>
      );
    }
    return "";
  };
  return <div>{form()}</div>;
};

addLeagues.propTypes = {
  user: React.PropTypes.object,
};

const mapStateToProps = state => ({
  user: state.user,
});
const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(cssModules(addLeagues, style));
