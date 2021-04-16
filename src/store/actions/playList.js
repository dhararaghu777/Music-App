import * as actionTypes from "./action";

export const addToPlayList = (data) => {
  return {
    type: actionTypes.ADD_TO_PLAYLIST,
    data: data
  };
};

export const addToList = (id) => {
  return {
    type: actionTypes.ADD_TO_LIST,
    id: id
  };
};

export const deleteFromList = (id, index) => {
  return {
    type: actionTypes.DELETE_FROM_LIST,
    id: id,
    index: index
  };
};

export const openListData = (id) => {
  return {
    type: actionTypes.OPEN_LIST_DATA,
    id: id
  };
};

export const addSongToPlayList = (id, index, data) => {
  return {
    type: actionTypes.ADD_SONG_TO_PLAYLIST,
    id: id,
    index: index,
    data: data
  };
};

export const createNewPlayList = () => {
  return {
    type: actionTypes.CREATE_NEW_PLAYLIST
  };
};

export const shuffleListData = (id) => {
  return {
    type: actionTypes.SHUFFLE_LIST_DATA,
    id: id
  };
};
