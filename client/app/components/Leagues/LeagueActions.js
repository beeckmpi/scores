/*
 * action types
 */

export const ADD_LEAGUE = 'ADD_LEAGUE';
export const REMOVE_LEAGUE = 'REMOVE_LEAGUE';
export const EDIT_LEAGUE = 'EDIT_LEAGUE';
export const GET_LEAGUE = 'GET_LEAGUE';
export const GET_ALL_LEAGUES = 'GET_ALL_LEAGUES';
export const GET_IMAGE = "GET_IMAGE";

/*
 * action creators
 */

export function addLeague(data) {
  return {
    type: ADD_LEAGUE,
    data,
  };
}

export function removeLeague(_id) {
  return {
    type: REMOVE_LEAGUE,
    _id,
  };
}

export function editLeague(_id, finished) {
  return {
    type: EDIT_LEAGUE,
    _id
  };
}

export function getLeagues(data) {
  return {
    type: GET_LEAGUES,
    _id,
  };
}

export function getAllLeagues(data) {
  return {
    type: GET_ALL_LEAGUES,
    data,
  };
}

export function getUploadLeagueImage(data) {
  return {
    type: UPLOAD_LEAGUE_IMAGE,
    data,
  };
}

export function getImage(_id, data) {
  return {
    type: GET_IMAGE,
    data,
  };
}
