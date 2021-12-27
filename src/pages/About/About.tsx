import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'
import { fetchItemById } from '../../store/actions'
import { State } from '../../types'
import arrowRightIcon from './icons/arrow-right.svg'
import './About.scss'

const About = () => {
  const params = useParams()
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const { currentItem, loading } = useSelector(
    (state: State) => state
  )

  useEffect(() => {
    if (params.id) {
      dispatch(fetchItemById(+params.id))
    }
  }, [dispatch, params.id])

  if (loading) {
    return <Loader />
  }

  return (
    <div className="about">
      <div
        className="img"
        style={{
          backgroundImage: `url('${currentItem?.imageUrl}')`,
        }}
      />

      <div className="container">
        <div className="article">
          <h1>{currentItem?.title}</h1>
          <div className="text">{currentItem?.summary}</div>
        </div>

        <span className="back" onClick={() => navigate('/')}>
          <img src={arrowRightIcon} alt="arrow right" />
          Back to homepage
        </span>
      </div>
    </div>
  )
}

export default About
