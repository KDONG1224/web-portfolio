import { PaymentMethod, BrandType, PriceType, ShippingCompany } from 'enums';

export interface ResponsePage {
  email: string;
  apiKey: string;
  status: 'active' | 'inactive';
  ownerId: string;
  type: string;
  subType: string;
  isStore: boolean;
  id: string;
  isSuperuser: boolean;
  isOperationuser?: boolean;
  icToken: string;
  cpToken: string;
  mainBanner: ResponseBanner;
  mobileMainBanner: ResponseBranchBanner;
  mobileMainSns: ResponseBranchBanner;
  mobileMainLeaflet: ResponseBranchBanner;
  mobileMainCulture: ResponseBranchBanner;
  mobileMainTopCommerce: ResponseBranchBanner;
  mobileMainAdCommerce: ResponseBranchBanner;
  mobileMainMagazineCommerce: ResponseBranchBanner;
  middleBanner?: ResponseBanner;
  planBanner: ResponsePlanBanner;
  promotionBanner: ResponsePromotionBanner;
  promotionPlanBanner: ResponsePromotionPlanBanner;
  popup: ResponsePopupBranch;
  storeName: string;
  name: string;
  isReceiveSms?: boolean;
  phone: string;
  address: string;
  storeFee: string;
  thumbnails: ResponseImagebankFile[];
  backgroundThumbnails: ResponseImagebankFile[];
  logoThumbnails: ResponseImagebankFile[];
  introduce: string;
  policies: ResponsePolicies;
  shippingFeeInfo: ResponseShippingInfo;
  shopguide: ResponseShopguide;
  faq: ResponseFaqList[];
  created: string;
  fee_type: string;
  sequence?: number;
  expose: boolean;
  subsidiary?: string;
  isSpecialStore: boolean;
  paymentMethod: PaymentMethod;
  introduceSummary?: string;
  isGroupuser?: boolean;
  groupId?: string;
  groupName?: string;
  brandType: BrandType;
  defaultSupplyDiscountPriceRate: number;
  defaultMarginRate: number;
  accountInfo?: ResponseAccountInfo;
  isContents?: boolean;
  maxBrandNum: number;
  couponApiKey?: string;
  menus?: UserMenu[];
  exchangeRate?: number;
  priceType: PriceType;
  imflowToken?: string;
  colorChip?: ColorChip[];
  discountRateInfo?: DiscountRateInfo;
  businessHours: string;
  parking: string;
  subway?: string;
  branchId: string;
  bus: {
    blueBus: string;
    normalBus: string;
    townsuttleBus: string;
    wideareaBus: string;
    expresscityBus: string;
    airportBus: string;
  };
  mobileCulture: ResponseImagebankFile[];
  szCatalogToken: string;
  floorList?: {
    [K in BranchName]: ResponseFloorInfo[];
  };
  amenitiesList?: {
    [K in BranchName]: ResponseAmenitiesInfo[];
  };
  drawingList?: {
    [K in BranchName]: ResponseDrawingInfo[];
  };
  recommender: boolean;
  oasisCatalogToken: oasisCatalogTokenInfo[];
  uid?: string;
}

export interface oasisCatalogTokenInfo {
  storeCd: string;
  token: string;
}

export interface DiscountRateInfo {
  brandDiscountRate?: number;
  addMarginRate?: number;
  selfDiscountRate?: number;
  wholeSaleDiscountRate?: number;
}

export interface ResponseBanner {
  fileList: ResponseImagebankFile[];
  playSpeed: number;
  autoPlay: boolean;
}

export interface ResponseBranchBanner {
  official?: ResponseBanner;
  hwajung?: ResponseBanner;
  ulsan?: ResponseBanner;
  nowon?: ResponseBanner;
  seongnam?: ResponseBanner;
  gwangmyeong?: ResponseBanner;
  daejeon?: ResponseBanner;
  haeundae?: ResponseBanner;
  sangdong?: ResponseBanner;
  jeonju?: ResponseBanner;
}

export interface ResponseImagebankFile {
  map(
    arg0: (e: ResponseImagebankFile, idx: number) => JSX.Element
  ): import('react').ReactNode;
  url?: string;
  baseUrl?: string;
  tags?: string[];
  type?: string;
  link?: string;
  eventActive?: boolean;
  availableDevices?: string;
  testContent?: boolean;
  modalType?: string;
  title?: string;
  contents?: string;
  buttonText?: string;
}

export interface ResponsePlanBanner {
  fileList: ResponseImagebankFile[];
  playSpeed: number;
  autoPlay: boolean;
}

export interface ResponsePromotionBanner {
  fileList: ResponseImagebankFile[];
  playSpeed: number;
  autoPlay: boolean;
}

export interface ResponsePromotionPlanBanner {
  fileList: ResponseImagebankFile[];
  playSpeed: number;
  autoPlay: boolean;
}

export interface ResponsePopup {
  fileList: ResponseImagebankFile[];
  enableExposeDate: boolean;
  exposeStarted: string;
  exposeEnded: string;
}

export interface ResponsePopupBranch {
  official?: ResponsePopup;
  hwajung?: ResponsePopup;
  ulsan?: ResponsePopup;
  nowon?: ResponsePopup;
  seongnam?: ResponsePopup;
  gwangmyeong?: ResponsePopup;
  daejeon?: ResponsePopup;
  haeundae?: ResponsePopup;
  sangdong?: ResponsePopup;
  jeonju?: ResponsePopup;
}

export interface ResponsePolicies {
  marketing?: string;
  terms?: string;
  privacy?: string;
  shipping?: string;
  exchangeAndRefund?: string;
  customerCenter?: string;
  giftTerms?: string;
  videoInformation?: string;
  order?: string;
  personalInformation?: string;
  marketingInformation?: string;
  regulation?: string;
}

export interface ResponseShippingInfo {
  shippingFee: number;
  shippingPolicies: ResponseShippingPolicies[];
  shippingCompany: ShippingCompany;
  shippingCustoms: number;
}

export interface ResponseShippingPolicies {
  shippingOption: 'totalAmount' | 'weight' | 'area' | 'overseas';
  buyTotalAmount: number;
  additionalShippingFee: number;
  weight: number;
  areaLocation: string;
  overseasLocation: string;
}

export interface ResponseFaqList {
  seq: number;
  faqType: string;
  contents: ResponseFaqContent[];
}

export interface UserMenu {
  root: string;
  key: string;
  name: string;
  tabs?: Array<{
    key: string;
    name: string;
  }>;
}

export interface ResponseAccountInfo {
  bank: string;
  accountNumber: string;
  accountHolder: string;
  recipientBankBookView: string;
  settleType: string;
  commissionSaleFee: number;
  inspectionFee?: number;
  settlementDay?: number;
  storeFee?: number;
}

export interface ColorChip {
  name: string;
  hex: string;
}

export interface ResponseFaqContent {
  seq: number;
  question: string;
  answer: string;
}

export interface ResponseShopguide {
  accusation: string;
  cashReceipt: string;
  compensation: string;
  freegift: string;
  hire: string;
  history: string;
  notIssued: string;
  operation: string;
  savePlusCard: string;
  subsidiary: string;
  voucher: string;
  integratedMember: string;
  cooperation: string;
  facility: string;
}

export type BranchName =
  | 'hwajung'
  | 'ulsan'
  | 'nowon'
  | 'seongnam'
  | 'gwangmyeong'
  | 'daejeon'
  | 'haeundae'
  | 'sangdong'
  | 'jeonju';

export interface ResponseFloorInfo {
  key?: number;
  floor: string;
  thema: string;
  storeName: string;
  phoneNumber: string;
}

export interface ResponseAmenitiesInfo {
  key?: number;
  name: string;
  floor: string;
  phoneNumber: string;
  description: string;
  time: string;
  image?: ResponseImagebankFile[];
}

export type signUpType =
  | 'terms'
  | 'personalInformation'
  | 'marketingInformation';

export interface ResponseDrawing {
  hwajung?: ResponseDrawingInfo;
  ulsan?: ResponseDrawingInfo;
  nowon?: ResponseDrawingInfo;
  seongnam?: ResponseDrawingInfo;
  gwangmyeong?: ResponseDrawingInfo;
  daejeon?: ResponseDrawingInfo;
  haeundae?: ResponseDrawingInfo;
  sangdong?: ResponseDrawingInfo;
  jeonju?: ResponseDrawingInfo;
}

export interface ResponseDrawingInfo {
  [x: string]: any;
  key?: number;
  floor: string;
  image?: ResponseImagebankFile[];
}

export interface ResponseAppVersion {
  created: string;
  updated: string;
  id: string;
  os: string;
  version: string;
  title?: string;
}
export interface ResponseServerCheck {
  statusCode: string;
  message: string;
  inspection: boolean;
}
export interface ResponseTextCertification {
  payKey: string;
  expireDate: string;
}

export interface TextCertificationInfo {
  phone: string;
  payKey: string;
  certificationNumber: string;
}

export interface ResponseTextCertificationInfo {
  data: { error: { statusCode?: number; name?: string; message?: string } };
}

export interface ResponesLink {
  id?: string;
  aid?: string;
  externalLinks: string[];
  imsLinkList: string[];
  edmLinkList: string[];
  managerList: string[];
}
