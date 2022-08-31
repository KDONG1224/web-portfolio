/* eslint-disable prefer-arrow/prefer-arrow-functions */
import { DEFAULT_PAGE, DEFAULT_PAGE_SIZE } from 'const';

type Indexable<T = { [key: string]: unknown }> = {
  [P in keyof T]: T[P];
};

export interface LoopbackWhere<T = Indexable> extends Indexable {
  and?: T[];
  or?: T[];
}

export interface LoopbackFilter<T = Indexable> {
  where?: LoopbackWhere<T>;
  skip?: number;
  limit?: number;
  order?: string;
}

export interface LoopbackQuery {
  query: 'where' | 'order' | 'skip' | 'limit';
  value: string | number | boolean | string[];
  field?: {
    key: string;
    andOr?: 'and' | 'or';
    operator?:
      | 'eq'
      | 'gt'
      | 'gte'
      | 'lt'
      | 'lte'
      | 'between'
      | 'inq'
      | 'nin'
      | 'near'
      | 'neq'
      | 'like'
      | 'nlike'
      | 'regexp';
    options?: 'i';
  };
}

export function queriesLoopback(queries: LoopbackQuery[] = []) {
  const queriesFilter = (filterQueryList: string[]) => (value: LoopbackQuery) =>
    filterQueryList.indexOf(value.query) === -1;

  return {
    setPaginationQueries(page: number, pageSize: number) {
      queries = queries.filter(queriesFilter(['skip', 'limit'])).concat([
        {
          query: 'skip',
          value: page * pageSize - pageSize
        },
        {
          query: 'limit',
          value: pageSize
        }
      ]);

      return this;
    },
    setOrderQueries(value: string) {
      queries = queries.filter(queriesFilter(['order'])).concat([
        {
          query: 'order',
          value
        }
      ]);

      return this;
    },
    getQueries() {
      return queries;
    },
    getPagination() {
      const [skip, limit] = queries.reduce(
        (prev, curr) => {
          if (curr.query === 'skip') {
            prev[0] = Number(curr.value);
          }

          if (curr.query === 'limit') {
            prev[1] = Number(curr.value);
          }

          return prev;
        },
        [0, 0]
      );

      const page = (skip + limit) / limit || DEFAULT_PAGE;
      const pageSize = limit || DEFAULT_PAGE_SIZE;

      return [page, pageSize];
    },
    toLoopbackQuery() {
      const query: any = {};

      queries.forEach((item) => {
        if (item.value === 'true' || item.value === 'false') {
          item.value = Boolean(item.value);
        }

        if (typeof item.value === 'string') {
          item.value = item.value.trim();
        }

        if (item.query === 'where') {
          Object.assign(query, {
            where: {
              ...query.where
            }
          });

          if (item.field) {
            const operator = item.field.operator && {
              [item.field.operator]: item.value
            };

            if (item.field.andOr) {
              const condition = operator
                ? {
                    [item.field.key]: {
                      ...operator,
                      options: 'i'
                    }
                  }
                : { [item.field.key]: item.value };

              if (item.field.andOr === 'or') {
                Object.assign(query, {
                  where: {
                    ...query.where,
                    or: query.where?.or?.concat(condition) || [condition]
                  }
                });
              }

              if (item.field.andOr === 'and') {
                Object.assign(query, {
                  where: {
                    ...query.where,
                    and: query.where?.and?.concat(condition) || [condition]
                  }
                });
              }
            } else if (item.field.operator) {
              Object.assign(query.where, {
                [item.field.key]: {
                  [item.field.operator]: item.value
                }
              });
            } else {
              Object.assign(query, {
                where: {
                  ...query.where,
                  [item.field.key]: item.value
                }
              });
            }
          }
        } else {
          Object.assign(query, {
            [item.query]: item.value
          });
        }
      });

      return query;
    }
  };
}
