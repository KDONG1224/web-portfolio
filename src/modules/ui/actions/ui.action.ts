import { createAction } from '@reduxjs/toolkit';
// import { ToastProps } from 'context/toast/ToastContext/model';

// export const OPEN_MAIN_NAV = 'ui/OPEN_MAIN_NAV';
// export const CLOSE_MAIN_NAV = 'ui/CLOSE_MAIN_NAV';

// export const OPEN_MODAL = 'ui/OPEN_MODAL';
// export const CLOSE_MODAL = 'ui/CLOSE_MODAL';

// export const ACTIVE_MENU_STYLE = 'ui/ACTIVE_MENU_STYLE';

// export const PATH_ACTION = 'ui/PATH_ACTION';

// export const openMainNavAction = createAction(OPEN_MAIN_NAV);

// export const closeMainNavAction = createAction(CLOSE_MAIN_NAV);

// export const activeMenuStyleAction = createAction<{
//   activeStore: string;
// }>(ACTIVE_MENU_STYLE);
// export const pageLoaderForceQuitMessageAction = createAction<{
//   noticeMessage?: string;
// }>('ui/PAGE_FORCE_QUIT_MESSAGE_LOADER');

// export const pageLoaderForceQuitAction = createAction(
//   'ui/PAGE_FORCE_QUIT_LOADER'
// );

// export const popupAction = createAction<{
//   noticeMessage?: string;
//   isModalVisible: boolean;
//   cancelTxt?: string;
//   okText?: string;
//   modaltype?: string;
// }>('ui/NOTICE_POPUP');

// export const modalAction = createAction<{
//   visible?: boolean;
//   message?: JSX.Element | string;
//   handleOnComplete?: () => void;
//   handleOnCancel?: () => void;
//   modaltype?: 'info' | 'confirm';
//   depth?: boolean;
//   cancelTxt?: string;
//   okText?: string;
//   pageLoading?: boolean;
// }>('ui/MODAL_ACTION');

// export const toastAction = createAction<ToastProps>('ui/TOAST_ACTION');

// export const resetModalAction = createAction('ui/RESET_MODAL_ACTION');

// export const resetToastAction = createAction('ui/RESET_TOAST_ACTION');

// export const pathAction = createAction<{
//   prev?: string;
//   current?: string;
// }>(PATH_ACTION);

//
export const pageLoaderAction = createAction<{
  actionType: string;
}>('ui/PAGE_LOADER');

export const sideMenuCollapsedAction = createAction<boolean>(
  'ui/SIDE_MENU_COLLAPSED'
);

export const touchSideMenuCollapsed = createAction<boolean>(
  'ui/touchSideMenuCollapsed'
);

// const actions = {
//   pageLoaderAction,
//   sideMenuCollapsedAction,
//   touchSideMenuCollapsed
// };

// export type UiAction = ActionType<typeof actions>;
