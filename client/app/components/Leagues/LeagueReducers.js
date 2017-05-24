import { ADD_LEAGUE, REMOVE_LEAGUE, EDIT_LEAGUE, GET_LEAGUE, GET_ALL_LEAGUES, GET_IMAGE, UPLOAD_LEAGUE_IMAGE } from './LeagueActions';
import { remove, edit, add } from '../../common/helpers';

const LEAGUES = (state = [], action) => {
  switch (action.type) {
    case ADD_LEAGUE:
      return add(state, action);
    case REMOVE_LEAGUE:
      return remove(state, action);
    case EDIT_LEAGUE:
      return edit(state, action);
    case GET_LEAGUE:
      return action.data;
    case GET_ALL_LEAGUES:
      return action.data;
    case UPLOAD_LEAGUE_IMAGE:
      return action.data;
    default:
      return state;
  }
};

export default LEAGUES;
