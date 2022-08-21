import { put, takeEvery } from 'redux-saga/effects';
import { Action } from 'typesafe-actions';
import { pageLoaderAction } from '..';

function* watchAsyncActionSaga(action: Action) {
  if (!/REQUEST|SUCCESS|FAILURE/gi.test(action.type)) {
    return;
  }

  yield put(
    pageLoaderAction({
      actionType: action.type
    })
  );
}

export function* uiSaga() {
  yield takeEvery('*', watchAsyncActionSaga);
}
