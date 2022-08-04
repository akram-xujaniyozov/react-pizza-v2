export type Pizza = {
  id: number;
  title: string;
  price: number;
  imageUrl: string;
  type: number;
  size: number;
  count: number;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type SearchPizzaParams = {
  category: string;
  sortBy: string;
  order: string;
  search: string;
  currentPage: string;
};

export interface PizzaSliceState {
  items: Pizza[];
  status: Status;
}
