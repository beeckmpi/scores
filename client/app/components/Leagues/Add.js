import React from 'react';
import cssModules from 'react-css-modules';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';
import {List, ListItem} from 'material-ui/List';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-redux';
import style from './leagues.styl';
import Login from '../Login/Login';
import { callUploadLeagueImage, callAddLeague } from './LeagueAsyncActions';
import asteroid from '../../common/asteroid';
import {Link} from 'react-router-dom';
import Dropzone from 'react-dropzone';

import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';


class addLeagues extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      leagueName : "",
      country: "",
      region: "",
      regionName: "",
      division: "",
      founded: "",
      website: "",
      filesToBeSent:[]
    };
  }
  handleChange = (event) => this.setState({[event.target.name]: event.target.value});
  handleChangeSelect = (type) => (event, index, value) => this.setState({[type]: value});
  onDrop = (acceptedFiles, rejectedFiles) => {
    const { dispatchCallUploadLeagueImg, dispatchCallAddLeague } = this.props;
    var filesToBeSent=this.state.filesToBeSent;
    filesToBeSent.push(acceptedFiles);
    var filesPreview=[];
    for(var i in filesToBeSent){
        filesPreview.push(<div>
          {filesToBeSent[i][0].name}
        </div>
      )
    }
    this.setState({filesToBeSent,filesPreview});
    acceptedFiles.forEach(file => {
      var reader = new FileReader();
      reader.onload = function(fileLoadEvent) {
        const imageURL = dispatchCallUploadLeagueImg(reader.result);
      };
      reader.readAsBinaryString(file);
    });

  };
  render() {
    const user = this.props.user;
    if (user && user.username) {
      return (
        <section styleName="SectionContainer">
          <div styleName="catTitle">Add League</div>
          <Paper key="AddLeague1" styleName="subCat" style={{display:"flex"}} >
            <Dropzone onDrop={(files) => this.onDrop(files)} style={{width:"300px", minHeight: '400px', padding: "130px 15px", margin: "0 25pt 0 5pt", border: "5px dashed #888"}}>
              Drag an image here, or click to select one.
            </Dropzone>
            {this.state.filesPreview}
            <div>
              <div>
                <TextField name="leagueName" value={this.state.leagueName} onChange={this.handleChange} floatingLabelText="League Name" />
              </div>
              <div>
                <SelectField
                  floatingLabelText="Country"
                  value={this.state.country}
                  name="country"
                  id="country"
                  onChange={this.handleChangeSelect("country")}
                >
                  <MenuItem key={"Austria"} value={"Austria"} primaryText="Austria" />
                  <MenuItem key={"Belgium"} value={"Belgium"} primaryText="Belgium" />
                  <MenuItem key={"Cech Republic"} value={"Cech Republic"} primaryText="Cech Republic" />
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
                  value={this.state.region}
                  name="region"
                  id="region"
                  onChange={this.handleChangeSelect("region")}
                >
                  <MenuItem key="National" value={"National"} primaryText="National" />
                  <MenuItem key="Provincial" value={"Provincial"} primaryText="Provincial" />
                  <MenuItem key="Regional" value={"Regional"} primaryText="Regional" />
                </SelectField>
              </div>
              <div>
                <TextField name="regionName" value={this.state.regionName} onChange={this.handleChange} floatingLabelText="Region Name" />
              </div>
              <div>
                <TextField name="division" value={this.state.division} onChange={this.handleChange} floatingLabelText="Division" />
              </div>
              <div>
                <TextField name="founded" value={this.state.founded} onChange={this.handleChange} floatingLabelText="Founded (year)" />
              </div>
              <div>
                <TextField name="website" value={this.state.website} onChange={this.handleChange} floatingLabelText="Website (URL)" />
              </div>
              <div>
                <RaisedButton
                  href="/"
                  label="Save League"
                  secondary={true}
                  icon={<FontIcon className="muidocs-icon-custom-github" />}
                  styleName="addButton"
                />
            </div>
            </div>
          </Paper>
        </section>
      );
    }
    return "";
  };
};

addLeagues.propTypes = {
  user: React.PropTypes.object,
  images: React.PropTypes.array.isRequired,
  leagues: React.PropTypes.array.isRequired,
  formState: React.PropTypes.object,
  dispatchCallUploadLeagueImg: React.PropTypes.func.isRequired,
  dispatchCallAddLeague: React.PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
  images: state.images,
  leagues: state.leagues,
});
const mapDispatchToProps = dispatch => ({
  dispatchCallUploadLeagueImg: files => dispatch(callUploadLeagueImage(files)),
  dispatchCallAddLeague: data => dispatch(addLeague(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(cssModules(addLeagues, style));
