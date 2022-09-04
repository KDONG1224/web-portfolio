export interface MainState {
  calledActions: string[];
  pageLoading: boolean;
  isModalVisible: boolean | null;
  lang?: string;
  isSideMenuCollapsedV2: boolean;
  isTouchSideMenuCollapsedV2: boolean;
}
