/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers } from 'redux';
import { LOCATION_CHANGE } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import mainReducer from 'containers/Main/reducer';

/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@4
 *
 */

// Initial routing state
const routeInitialState = {
  locationBeforeTransitions: null,
};

/**
 * Merge route into the global application state
 */
function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
     /* istanbul ignore next */
    case LOCATION_CHANGE:
      return { ...state, locationBeforeTransitions: action.payload };
    default:
      return state;
  }
}

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(asyncReducers) {
  const appReducers = combineReducers({
    main: mainReducer,
    form: formReducer,
    ...asyncReducers,
  });

  const rootReducer = (state, action) => {
    if (action.type === 'RESET_STATE') {
      const { user, routing } = state; // Remain some state
      state = { user, routing }; // eslint-disable-line no-param-reassign
    }

    return appReducers(state, action);
  };

  return rootReducer;
}
