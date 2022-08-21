export interface UiState {
  calledActions: string[];
  pageLoading: boolean;
  isModalVisible: boolean | null;
  lang?: string;
  isSideMenuCollapsed: boolean;
  isTouchSideMenuCollapsed: boolean;
}
