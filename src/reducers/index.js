/* Vendor */
import { combineReducers } from 'redux';

/* Reducers */
import browser from 'reducers/browser';
import example from 'reducers/example';

export default combineReducers({
  browser,
  example,
});
