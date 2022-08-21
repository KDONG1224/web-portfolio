// immer
import produce from 'immer';

// typesafe-actions
import { createReducer } from 'typesafe-actions';

// models
import {
  pageLoaderAction,
  sideMenuCollapsedAction,
  touchSideMenuCollapsed,
  UiAction,
  UiState
} from '..';

const intialState: UiState = {
  calledActions: [],
  pageLoading: false,
  isModalVisible: null,
  isSideMenuCollapsed: false,
  isTouchSideMenuCollapsed: false
};

export const uiReducer = createReducer<UiState, UiAction>(intialState)
  .handleAction(pageLoaderAction, (state, action) =>
    produce(state, draft => {
      const { actionType } = action.payload;
      if (/REQUEST/gi.test(actionType)) {
        draft.calledActions = draft.calledActions.concat(
          actionType.replace(/_REQUEST/gi, '')
        );
      }

      if (/SUCCESS|FAILURE/gi.test(actionType)) {
        draft.calledActions = draft.calledActions.filter(
          value => value !== actionType.replace(/_SUCCESS|_FAILURE/gi, '')
        );
      }

      draft.pageLoading = draft.calledActions.length ? true : false;
    })
  )
  .handleAction(sideMenuCollapsedAction, (state, action) => {
    return produce(state, draft => {
      draft.isSideMenuCollapsed = action.payload;
    });
  })
  .handleAction(touchSideMenuCollapsed, (state, action) => {
    return produce(state, draft => {
      draft.isTouchSideMenuCollapsed = action.payload;
    });
  });
