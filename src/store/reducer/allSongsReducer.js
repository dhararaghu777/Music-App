import * as actionTypes from "../actions/action";

const initialState = {
  songs: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_SONGS:
      return {
        ...state,
        songs: [...action.songs]
      };

    default:
      return { ...state };
  }
};

export default reducer;
