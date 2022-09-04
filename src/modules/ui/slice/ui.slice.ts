// base
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// models
import { UiState } from '..';

const initialState: UiState = {
  calledActions: [],
  pageLoading: false,
  isModalVisible: null,
  isSideMenuCollapsed: false,
  isTouchSideMenuCollapsed: false
};

const uiSlice = createSlice({
  name: 'uiSlice',
  initialState,
  reducers: {
    pageLoaderAction: (state, action: PayloadAction<any>) => {
      const { actionType } = action.payload;

      if (/REQUEST/gi.test(actionType)) {
        state.calledActions = state.calledActions.concat(
          actionType.replace(/_REQUEST/gi, '')
        );
      }

      if (/SUCCESS|FAILURE/gi.test(actionType)) {
        state.calledActions = state.calledActions.filter(
          (value) => value !== actionType.replace(/_SUCCESS|_FAILURE/gi, '')
        );
      }

      state.pageLoading = state.calledActions.length ? true : false;
    },
    sideMenuCollapsedAction: (state, action: PayloadAction<boolean>) => {
      state.isSideMenuCollapsed = action.payload;
    },
    touchSideMenuCollapsed: (state, action: PayloadAction<boolean>) => {
      state.isTouchSideMenuCollapsed = action.payload;
    }
  }
});

export const {
  pageLoaderAction,
  sideMenuCollapsedAction,
  touchSideMenuCollapsed
} = uiSlice.actions;
export default uiSlice.reducer;
