import { AnyAction, configureStore, Reducer } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import rootReducer, { ReducerStates } from './rootReducer';

const initialState = {
  user: null
};

const makeStore = () => {
  return configureStore({
    reducer: rootReducer as Reducer<ReducerStates, AnyAction>
    // devTools: process.env.NODE_ENV === 'development',
    // middleware: [...middleware]
    // devTools: true
  });
};

const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const wrapper = createWrapper(makeStore, {
  // debug: process.env.NODE_ENV === 'development'
});

export default wrapper;
