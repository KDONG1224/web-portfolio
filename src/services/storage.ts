const StorageBuilder = (storage?: Storage) => ({
  setItem: (key: string, value: string) => storage?.setItem(key, value),
  getItem: (key: string) => storage?.getItem(key),
  removeItem: (key: string) => storage?.removeItem(key)
});

const STORAGE_BASE_NAME = 'sz';

export const STORAGE_SESSION_ASCT = `${STORAGE_BASE_NAME}_asct`;
export const STORAGE_SESSION_ICT = 'ic_ict';
export const STORAGE_SESSION_BRAND = 'brand_token';

export const STORAGE_LOCAL_COLLAPSED = `${STORAGE_BASE_NAME}_collapsed`;
export const STORAGE_LOCAL_ASCT = `${STORAGE_BASE_NAME}_asct`;

export const storageService = {
  local: StorageBuilder(
    typeof window === 'object' ? window.localStorage : undefined
  ),
  session: StorageBuilder(
    typeof window === 'object' ? window.sessionStorage : undefined
  )
};
