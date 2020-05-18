/* Vendor */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createResponsiveStoreEnhancer } from 'redux-responsive';
import thunkMiddleware from 'redux-thunk';

/* Reducer */
import reducer from 'reducers';

const makeStore = initialState => createStore(
  reducer,
  initialState,
  composeWithDevTools(
    createResponsiveStoreEnhancer(),
    applyMiddleware(thunkMiddleware),
  ),
);

export default makeStore;
