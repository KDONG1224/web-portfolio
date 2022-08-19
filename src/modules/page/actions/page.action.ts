import { AxiosError } from 'axios';
import { LoopbackFilter } from 'services/loopback';
import { ActionType, createAction, createAsyncAction } from 'typesafe-actions';
import { ResponsePage } from '../models/page.model';

const GET_PAGE_DATA_REQUEST = 'page/GET_PAGE_DATA_REQUEST';
const GET_PAGE_DATA_SUCCESS = 'page/GET_PAGE_DATA_SUCCESS';
const GET_PAGE_DATA_FAILURE = 'page/GET_PAGE_DATA_FAILURE';

export const getPageDataAction = createAsyncAction(
  GET_PAGE_DATA_REQUEST,
  GET_PAGE_DATA_SUCCESS,
  GET_PAGE_DATA_FAILURE
)<void, ResponsePage, AxiosError>();

const actions = {
  getPageDataAction
};

export type PageAction = ActionType<typeof actions>;
