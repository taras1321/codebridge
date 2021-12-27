import Card from '../Card/Card'
import { Item } from '../../types'
import './Cards.scss'

interface CardsProps {
  items: Item[]
}

const Cards = ({ items }: CardsProps) => {
  return (
    <div className="cards">
      {items.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          imageUrl={item.imageUrl}
          title={item.title}
          text={item.summary}
          date={item.publishedAt}
        />
      ))}
    </div>
  )
}

export default Cards
