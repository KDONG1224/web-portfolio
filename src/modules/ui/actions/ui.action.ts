// typesafe-actions
import { createAction, ActionType } from 'typesafe-actions';

export const pageLoaderAction = createAction('ui/PAGE_LOADER')<{
  actionType: string;
}>();

export const sideMenuCollapsedAction = createAction(
  'ui/SIDE_MENU_COLLAPSED'
)<boolean>();

export const touchSideMenuCollapsed = createAction(
  'ui/touchSideMenuCollapsed'
)<boolean>();

const actions = {
  pageLoaderAction,
  sideMenuCollapsedAction,
  touchSideMenuCollapsed
};

export type UiAction = ActionType<typeof actions>;
