import { ChangeEvent, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchByString } from '../../store/actions'
import { State } from '../../types'
import searchIcon from './icons/search.svg'
import './Search.scss'

const Search = () => {
  const dispatch = useDispatch()
  const { searchString } = useSelector((state: State) => state)
  const inputRef = useRef<HTMLInputElement>(null)

  function changeHandler(event: ChangeEvent<HTMLInputElement>) {
    dispatch(searchByString(event.target.value.toLocaleLowerCase()))
  }

  return (
    <div className="search">
      <label htmlFor="filter">Filter by keywords</label>

      <div className="input-wrapper">
        <img
          src={searchIcon}
          alt="search icon"
          className="search-icon"
          onClick={() => inputRef.current?.focus()}
        />

        <input
          type="text"
          id="filter"
          ref={inputRef}
          value={searchString}
          onChange={changeHandler}
        />
      </div>
    </div>
  )
}

export default Search
