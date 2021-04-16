import * as actionTypes from "../actions/action";

const initialState = {
  playListArray: [],
  totalSongs: [],
  listIndex: 0
};

const addToList = (state, action) => {
  const list = [];
  list.push(...state.totalSongs[action.id]);
  console.log("AddToList", list);
  return {
    ...state,
    playListArray: list
  };
};

const deleteFromList = (state, action) => {
  let list = state.totalSongs;
  let arr = list[action.id];
  let indexNum = arr.findIndex((x) => action.index === x.id);
  list[action.id].splice(indexNum, 1);
  console.log("Delete", list);

  return {
    ...state,
    playListArray: [...list[action.id]],
    totalSongs: [...list]
  };
};

const openListData = (state, action) => {
  return {
    ...state,
    listIndex: action.id
  };
};

const addSongToPlayList = (state, action) => {
  let list = state.totalSongs[action.id];
  list.push(action.data[action.index - 1]);
  let totalSongs = state.totalSongs;
  totalSongs[action.id] = list;
  console.log("Add Song To PlayList", totalSongs);
  return {
    ...state,
    totalSongs: [...totalSongs],
    playListArray: [...list]
  };
};

const createNewPlayList = (state, action) => {
  // console.log(state.totalSongs);
  let totalSongs = [...state.totalSongs];
  const newPlayList = [];
  totalSongs.push(newPlayList);

  return {
    ...state,
    totalSongs: [...totalSongs]
  };
};

const shuffleListData = (state, action) => {
  // console.log("Before Shuffle", state.totalSongs[action.id]);
  let totalSongs = [...state.totalSongs];
  let arr = totalSongs[action.id];
  let currentIndex = arr.length,
    temp,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temp = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temp;
  }

  totalSongs[action.id] = arr;
  // console.log("After Shuffle", arr);

  return {
    ...state,
    totalSongs: [...totalSongs],
    playListArray: [...totalSongs[action.id]]
  };
};

// -----------Reducer---------

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_PLAYLIST:
      return {
        ...state,
        totalSongs: [...action.data]
      };

    case actionTypes.ADD_TO_LIST:
      return addToList(state, action);

    case actionTypes.DELETE_FROM_LIST:
      return deleteFromList(state, action);

    case actionTypes.OPEN_LIST_DATA:
      return openListData(state, action);

    case actionTypes.ADD_SONG_TO_PLAYLIST:
      return addSongToPlayList(state, action);

    case actionTypes.CREATE_NEW_PLAYLIST:
      return createNewPlayList(state, action);

    case actionTypes.SHUFFLE_LIST_DATA:
      return shuffleListData(state, action);

    default:
      return { ...state };
  }
};

export default reducer;
