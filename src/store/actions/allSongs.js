import * as actionTypes from './action';

 export const addSongs=(songs)=>{
  return {
    type:actionTypes.ADD_SONGS,
    songs:songs
  }
}