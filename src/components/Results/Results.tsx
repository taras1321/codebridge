import './Results.scss'

interface ResultsProps {
  count: number
}

const Results = ({ count }: ResultsProps) => {
  return <div className="results">Results: {count}</div>
}

export default Results
