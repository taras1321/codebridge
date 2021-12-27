import { State, Action, ActionTypes } from '../types'

const initialState: State = {
  items: [],
  currentItem: null,
  loading: false,
  searchString: '',
}

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {
    case ActionTypes.FETCH_ITEMS:
      return { ...state, loading: true }

    case ActionTypes.FETCH_ITEMS_SUCCESS:
      return { ...state, loading: false, items: action.payload }

    case ActionTypes.FETCH_ITEM:
      return { ...state, loading: true }

    case ActionTypes.FETCH_ITEM_SUCCESS:
      return { ...state, loading: false, currentItem: action.payload }

    case ActionTypes.SEARCH_BY_STRING:
      return { ...state, searchString: action.payload }

    default:
      return state
  }
}
