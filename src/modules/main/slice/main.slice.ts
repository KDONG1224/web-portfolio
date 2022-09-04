// base
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// model
import { MainState } from '..';

const initialState: MainState = {
  calledActions: [],
  pageLoading: false,
  isModalVisible: null,
  isSideMenuCollapsedV2: false,
  isTouchSideMenuCollapsedV2: false
};

const mainSlice = createSlice({
  name: 'mainSlice',
  initialState,
  reducers: {
    sideMenuCollapsedActionV2: (state, action: PayloadAction<boolean>) => {
      state.isSideMenuCollapsedV2 = action.payload;
    },
    touchSideMenuCollapsedV2: (state, action: PayloadAction<boolean>) => {
      state.isTouchSideMenuCollapsedV2 = action.payload;
    }
  }
});

export const { sideMenuCollapsedActionV2, touchSideMenuCollapsedV2 } =
  mainSlice.actions;
export default mainSlice.reducer;
