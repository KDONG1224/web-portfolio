// base
import { HYDRATE } from 'next-redux-wrapper';
import { AnyAction, CombinedState, combineReducers } from 'redux';

// types
import { UiState } from './ui';

// slices
import uiSlice from './ui/slice/ui.slice';

export interface ReducerStates {
  ui: UiState;
}

const rootReducer = (
  state: ReducerStates,
  action: AnyAction
): CombinedState<ReducerStates> => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload
      };
    default: {
      const combinedReducer = combineReducers({
        ui: uiSlice
      });

      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
