import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { loadState, saveState } from './localStorage';

import rootReducer from './reducers/index';

const persistedState = loadState()

const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
  saveState(store.getState());
})

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
