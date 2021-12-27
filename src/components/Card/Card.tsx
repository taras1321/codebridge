import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { changeDate } from '../../utils'
import { State } from '../../types'
import calendarIcon from './icons/calendar-icon.svg'
import arrowRight from './icons/arrow-right.svg'
import './Card.scss'

interface PrpopsTypes {
  id: number
  imageUrl: string
  title: string
  text: string
  date: string
}

const Card = (props: PrpopsTypes) => {
  const { id, imageUrl, title, text, date } = props

  const navigate = useNavigate()
  const { searchString } = useSelector((state: State) => state)

  const arrayFromSearchString: string[] = searchString.split(' ')
  const arrayFromTitle: string[] = title.split(' ')
  const arrayFromText: string[] = text.split(' ')

  function renderTextFromArray(str: string, index: number) {
    if (arrayFromSearchString.includes(str.toLocaleLowerCase())) {
      return (
        <span key={index} className="yellow">
          {str}{' '}
        </span>
      )
    }
    return <span key={index}>{str} </span>
  }

  const newDate = changeDate(date)

  return (
    <div className="card">
      <div
        className="img"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      />

      <div className="content">
        <div className="date">
          <img src={calendarIcon} alt="calendar icon" />
          {newDate.month} {newDate.day}, {newDate.year}
        </div>

        <h2>{arrayFromTitle.map(renderTextFromArray)}</h2>

        <div className="text">
          {arrayFromText.map(renderTextFromArray)}
        </div>

        <span
          className="read-more"
          onClick={() => navigate(`about/${id}`)}
        >
          Read more <img src={arrowRight} alt="arrow right" />
        </span>
      </div>
    </div>
  )
}

export default Card
