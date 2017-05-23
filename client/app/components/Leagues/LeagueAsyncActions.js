import asteroid from '../../common/asteroid';
import { addLeague, getAllLeague, removeLeague, editLeague, uploadLeagueImage, getImage } from './LeagueActions';

export function callAddLeague(message) {
  return dispatch => asteroid.call('addLeague', message)
      .then(result => dispatch(addLeague({ _id: result, message })));
}

export function callGetLeague() {
  return dispatch => asteroid.call('getLeague')
      .then(result => dispatch(getLeague(result)));
}

export function callGetAllLeague() {
  return dispatch => asteroid.call('getAllLeagues')
      .then(result => dispatch(getAllLeague(result)));
}

export function callRemoveLeague(_id) {
  return dispatch => asteroid.call('removeLeague', _id)
      .then(() => dispatch(removeLeague(_id)));
}

export function callEditLeague(_id, data) {
  return dispatch => asteroid.call('editLeague', _id, data)
      .then(() => dispatch(editLeague(_id, data)));
}
export function callUploadLeagueImage(fileName, readerResult) {
  return dispatch => asteroid.call('uploadImage', fileName, readerResult)
      .then(result => dispatch(getImage({_id: result})));
}
