import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { all, fork } from 'redux-saga/effects';

import { PageState, pageSaga, pageReducer } from './page';

export interface Indexable {
  [key: string]: any;
}

export interface StoreState {
  router: RouterState;
}

export function* saga() {
  yield all([fork(pageSaga)]);
}

const reducer = (history: History) =>
  combineReducers<StoreState>({
    router: connectRouter(history),
    pageState: pageReducer
  });

export default reducer;
