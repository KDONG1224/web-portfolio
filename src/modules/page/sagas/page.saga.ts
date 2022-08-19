import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { STORAGE_SESSION_ICT } from 'services/storage';
import { ActionType } from 'typesafe-actions';
import * as Actions from '../actions/page.action';
import { pageAPI } from '../apis/page.api';
const icToken = sessionStorage.getItem('ic_ict');

function* getPageDataSaga() {
  try {
    const data = yield call(pageAPI.getPageData);
    if (!icToken) {
      sessionStorage.setItem(STORAGE_SESSION_ICT, data.icToken);
    }
    yield put(Actions.getPageDataAction.success(data));
  } catch (error) {
    yield put(Actions.getPageDataAction.failure(error));
  }
}

export function* pageSaga() {
  yield takeEvery(Actions.getPageDataAction.request, getPageDataSaga);
}
