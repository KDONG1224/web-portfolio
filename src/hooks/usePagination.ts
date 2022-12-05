// base
import { useMemo, useCallback, useEffect, useRef, useState } from 'react';
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from 'consts';
// import { LoopbackQuery, queriesLoopback } from 'services/loopback';

// export interface usePaginationProps {
//   queries?: LoopbackQuery[];
//   totalElement: number;
//   defaultPage?: number;
//   defaultPageSize?: number;
//   onChangePagination?: (page: number, size: number) => void;
// }

// export const usePagination = ({
//   queries,
//   totalElement,
//   onChangePagination,
//   defaultPage = DEFAULT_PAGE,
//   defaultPageSize = DEFAULT_PAGE_SIZE,
// }: usePaginationProps) => {
//   const [pager, setPager] = useState({
//     page: defaultPage,
//     pageSize: defaultPageSize,
//   });

//   const changePaginationRef = useRef<Function>();

//   changePaginationRef.current = onChangePagination;

//   const setPagination = useCallback((page?: number, pageSize?: number) => {
//     setPager((pager) => Object.assign({}, pager, { page, pageSize }));
//   }, []);

//   const pagination = useMemo(() => {
//     return {
//       total: totalElement,
//       current: pager.page,
//       pageSize: pager.pageSize,
//       showSizeChanger: false,
//       onChange: (page: number, pageSize: number = pager.pageSize) => {
//         if (changePaginationRef.current) {
//           changePaginationRef.current(page, pageSize);
//         }

//         setPagination(page, pageSize);
//       },
//     };
//   }, [totalElement, pager, setPagination]);

//   const onChangePageSize = useCallback(
//     (page: number, pageSize: number = pager.pageSize) => {
//       if (changePaginationRef.current) {
//         changePaginationRef.current(page, pageSize);
//       }

//       setPagination(page, pageSize);
//     },
//     [pager.pageSize, setPagination]
//   );

//   useEffect(() => {
//     if (!queries) {
//       return;
//     }

//     const [page, pageSize] = queriesLoopback(queries).getPagination();

//     setPagination(page, pageSize);
//   }, [queries, setPagination]);

//   return {
//     page: pager.page,
//     pageSize: pager.pageSize,
//     pagination,
//     onChangePageSize,
//     setPagination,
//   };
// };

export const usePagination = (
  updateFilter: (v: { page?: number; pageSize?: number }) => void,
  total: number = 0,
  page: number = 1,
  pageSize: number = DEFAULT_PAGE_SIZE
) => {
  return {
    total: total || 0,
    current: parseInt(`${page}`),
    pageSize: parseInt(`${pageSize}`),
    showSizeChanger: false,
    onChange: (_page: number, _pageSize?: number) => {
      updateFilter({ page: _page, pageSize: _pageSize });
    },
    onShowSizeChange: (_page: number, _pageSize: number) => {
      updateFilter({ page: _page, pageSize: _pageSize });
    }
  };
};
