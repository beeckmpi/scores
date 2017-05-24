import { combineReducers } from 'redux';
import user from './components/Login/LoginReducers';
import todos from './components/Todo/TodoReducers';
import leagues from './components/Leagues/LeagueReducers';
import images from './components/Images/ImageReducers';

const mainReducer = combineReducers({
  todos,
  user,
  leagues,
  images,
});

export default mainReducer;
