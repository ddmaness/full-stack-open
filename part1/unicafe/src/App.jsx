import { useState } from "react"


const StatisticsLine = ({text, value}) => (
  <li>
    <span>{`${text}: ${value}`}</span>
  </li>
)

const Statistics = ({good, bad, neutral}) => {

  // Total of all submitted feedback
  const totalFeedBack = good + bad + neutral

  // calculate the average of feedback around target parameter
  const calculateAverage = (count) => {
    // if target is provided caculate the average, if not just give the average of all feedback
    const average = typeof count === 'number' ? count / totalFeedBack : (good + (bad * -1)) / totalFeedBack
    return isNaN(average) ? 'No Data' : average
  }

  return (
    totalFeedBack ? (
    <>
      <h2>Statistics</h2>
      <ul>
        <StatisticsLine text='Good' value={good}></StatisticsLine>
        <StatisticsLine text='Bad' value={bad}></StatisticsLine>
        <StatisticsLine text='Neutral' value={neutral}></StatisticsLine>
        <StatisticsLine text='All' value={totalFeedBack}></StatisticsLine>
        <StatisticsLine text='Average' value={calculateAverage()}></StatisticsLine>
        <StatisticsLine text='Positive' value={calculateAverage(good)}></StatisticsLine>
        <StatisticsLine text='Negative' value={calculateAverage(bad)}></StatisticsLine>
        <StatisticsLine text='Neutral' value={calculateAverage(neutral)}></StatisticsLine>
      </ul>
    </>
    ) : <p>No Feedback Collected</p>
  )
}

const Button = ({onClick, children}) => <button onClick={onClick}>{children}</button>

const App = () => {
  const [good, setGood] = useState(0)
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)

  // increment target feedback category by 1
  const incrementFeedback = (feedbackType, count) => () => {
    feedbackType(count + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <ul>
        <li>
          <span>Good</span> <Button onClick={incrementFeedback(setGood, good)}>+</Button>
        </li>
        <li>
          <span>Bad</span> <Button onClick={incrementFeedback(setBad, bad)}>+</Button>
        </li>
        <li>
          <span>Neutral</span> <Button onClick={incrementFeedback(setNeutral, neutral)}>+</Button>
        </li>
      </ul>
      <Statistics good={good} bad={bad} neutral={neutral}></Statistics>
    </div>
  )
}

export default App
