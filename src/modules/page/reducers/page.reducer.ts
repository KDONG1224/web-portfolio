import produce from 'immer';
import { createReducer } from 'typesafe-actions';

import {
  PageAction,
  getPageDataAction,
  getBrandDataAction,
  getAppVersionAction,
  getAppServerCheckAction,
  usersCertificationPhoneResAction,
  usersCertificationPhoneReqAction,
  resetTextAuthAction,
  getLinkListAction
} from '../actions/page.action';
import {
  ResponsePage,
  ResponseAppVersion,
  ResponseServerCheck,
  ResponesLink
} from '../models/page.model';

export interface PageState {
  page?: ResponsePage;
  brand: ResponsePage[];
  winnerListDummy: string[];
  lastEventListDummuy: [];
  appVersion: ResponseAppVersion[];
  inspection: ResponseServerCheck;
  payKey?: string;
  textAuthChecked: boolean;
  linkList: ResponesLink;
}

const initialState: PageState = {
  page: undefined,
  brand: [],
  winnerListDummy: ['', ''],
  lastEventListDummuy: [],
  appVersion: [],
  inspection: {
    statusCode: '',
    message: '',
    inspection: false
  },
  payKey: undefined,
  textAuthChecked: false,
  linkList: {
    externalLinks: [],
    imsLinkList: [],
    edmLinkList: [],
    managerList: []
  }
};

export const pageReducer = createReducer<PageState, PageAction>(initialState)
  .handleAction(getPageDataAction.success, (state, action) =>
    produce(state, draft => {
      draft.page = action.payload;
    })
  )
  .handleAction(getBrandDataAction.success, (state, action) =>
    produce(state, draft => {
      const { data, isAllStore } = action.payload;
      if (isAllStore) {
        draft.brand = data;
      }
    })
  )
  .handleAction(getAppVersionAction.success, (state, action) =>
    produce(state, draft => {
      const { data } = action.payload;

      draft.appVersion = data;
    })
  )
  .handleAction(getAppServerCheckAction.success, (state, action) =>
    produce(state, draft => {
      draft.inspection = action.payload;
    })
  )
  .handleAction(usersCertificationPhoneReqAction.success, (state, action) =>
    produce(state, draft => {
      const { payKey } = action.payload;
      draft.payKey = payKey;
    })
  )
  .handleAction(usersCertificationPhoneResAction.success, (state, action) =>
    produce(state, draft => {
      const { data } = action.payload;
      if (!data) {
        draft.textAuthChecked = true;
      } else {
        return alert(data.error.message);
      }
    })
  )
  .handleAction(resetTextAuthAction, state =>
    produce(state, draft => {
      draft.payKey = undefined;
      draft.textAuthChecked = false;
    })
  )
  .handleAction(getLinkListAction.success, (state, action) =>
    produce(state, draft => {
      draft.linkList = action.payload;
    })
  );
