import axios from 'axios'
import { Dispatch } from 'redux'
import { ActionTypes, Action, Item } from '../types'

export function fetchItems() {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({ type: ActionTypes.FETCH_ITEMS })

      const response = await axios.get<Item[]>(
        'https://api.spaceflightnewsapi.net/v3/articles?_limit=50'
      )

      const data = response.data.map((item) => {
        if (item.summary.length > 100) {
          item.summary = item.summary.slice(0, 100) + '...'
        }

        return item
      })

      dispatch({
        type: ActionTypes.FETCH_ITEMS_SUCCESS,
        payload: data,
      })
    } catch (e) {
      console.log(e)
    }
  }
}

export function fetchItemById(id: number) {
  return async (dispatch: Dispatch<Action>) => {
    try {
      dispatch({ type: ActionTypes.FETCH_ITEM })

      const response = await axios.get<Item>(
        `https://api.spaceflightnewsapi.net/v3/articles/${id}`
      )

      dispatch({
        type: ActionTypes.FETCH_ITEM_SUCCESS,
        payload: response.data,
      })
    } catch (e) {
      console.log(e)
    }
  }
}

export function searchByString(str: string): Action {
  return { type: ActionTypes.SEARCH_BY_STRING, payload: str }
}
