// redux
import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';

// router
import { connectRouter, RouterState } from 'connected-react-router';

// history
import { History } from 'history';

// modules
import { uiReducer, uiSaga, UiState } from './ui';

export interface StoreState {
  router: RouterState;
  ui: UiState;
}

export function* saga() {
  yield all([fork(uiSaga)]);
}

const reducer = (history: History) =>
  combineReducers<StoreState>({
    router: connectRouter(history),
    ui: uiReducer
  });

export default reducer;
