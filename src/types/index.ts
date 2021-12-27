export interface Item {
  id: number
  title: string
  url: string
  imageUrl: string
  newsSite: string
  summary: string
  publishedAt: string
  updatedAt: string
  featured: boolean
  launches: any[]
  events: any[]
}

export interface State {
  items: Item[]
  currentItem: null | Item
  loading: boolean
  searchString: string
}

export enum ActionTypes {
  FETCH_ITEMS = 'FETCH_ITEMS',
  FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS',
  FETCH_ITEM = 'FETCH_ITEM',
  FETCH_ITEM_SUCCESS = 'FETCH_ITEM_SUCCESS',
  SEARCH_BY_STRING = 'SEARCH_BY_STRING',
}

interface FetchItemsAction {
  type: ActionTypes.FETCH_ITEMS
}

interface FetchItemsSuccessAction {
  type: ActionTypes.FETCH_ITEMS_SUCCESS
  payload: Item[]
}

interface FetchItemAction {
  type: ActionTypes.FETCH_ITEM
}

interface FetchItemSuccessAction {
  type: ActionTypes.FETCH_ITEM_SUCCESS
  payload: Item
}

interface SearchByString {
  type: ActionTypes.SEARCH_BY_STRING
  payload: string
}

export type Action =
  | FetchItemsAction
  | FetchItemsSuccessAction
  | FetchItemAction
  | FetchItemSuccessAction
  | SearchByString
