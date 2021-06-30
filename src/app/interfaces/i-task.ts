export interface ITask {
  id?: string;
  title?: string;
  status?: string;
}

export interface IPageItem {
  content: Array<ITask>;
  pageable: IPageable;
  totalElements: number;
  totalPages: number;
  last: boolean;
  number: number;
  size: number;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  empty: boolean;
};

export interface IPageable {
  sort: Sort;
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
};

export interface ISort {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
};

export interface Sort {
  sorted: boolean;
  unsorted: boolean;
  empty: boolean;
};
