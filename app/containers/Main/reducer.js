import {
  LOAD_REPOS_SUCCESS,
  LOAD_REPOS,
  LOAD_REPOS_ERROR,
} from './constants';

// The initial state of the App
const initialState = {
  loading: false,
  error: false,
  success: false
};

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_REPOS:
      return state;
    case LOAD_REPOS_SUCCESS:
      return Object.assign({}, state, {
        success: true
      });
    case LOAD_REPOS_ERROR:
      return Object.assign({}, state, {
        error: true
      });
    default:
      return state;
  }
}

export default mainReducer;
