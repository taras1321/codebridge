import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cards from '../../components/Cards/Cards'
import Loader from '../../components/Loader/Loader'
import Results from '../../components/Results/Results'
import Search from '../../components/Search/Search'
import { fetchItems } from '../../store/actions'
import { State } from '../../types'
import { Item } from '../../types'
import './Home.scss'

const Home = () => {
  const { items, loading, searchString } = useSelector(
    (state: State) => state
  )
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchItems())
  }, [dispatch])

  const visibleItems: Item[] = []
  const arrayFromSearchString: string[] = searchString.split(' ')

  arrayFromSearchString.forEach((str: string) => {
    items.forEach((item) => {
      const arrayFromTitle = item.title.toLowerCase().split(' ')
      const arrayFromText = item.summary.toLowerCase().split(' ')

      if (
        (arrayFromTitle.includes(str) &&
          !visibleItems.includes(item)) ||
        (arrayFromText.includes(str) && !visibleItems.includes(item))
      ) {
        visibleItems.push(item)
      }
    })
  })

  return (
    <div className="home">
      <div className="container">
        <Search />

        {loading ? (
          <Loader />
        ) : (
          <>
            {searchString === '' ? (
              <>
                <Results count={items.length} />
                <Cards items={items} />
              </>
            ) : (
              <>
                <Results count={visibleItems.length} />
                {visibleItems.length ? (
                  <Cards items={visibleItems} />
                ) : null}
              </>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default Home
