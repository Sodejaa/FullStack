import { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => (
  <div>{props.text} {props.value}</div>
)

const Statistics = (props) => {
  if(props.all !== 0){
  return (
    <div>
      <h2>Statistics</h2>
        <div>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={props.all} />
        <StatisticLine text="average" value={props.average} />
        <StatisticLine text="positive" value={props.positive} />
        </div>
    </div>
  )
}
  else {
    return (
      <div>
        <h2>Statistics</h2>
        <div>
          No feedback given!
        </div>
      </div>
    )
  }
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = (good / all)*100 + " %"

  const addGood = newValue => {
    console.log('good value now', newValue)
    setGood(newValue)
  }
  const addNeutral = newValue => {
    console.log('neutral value now', newValue)
    setNeutral(newValue)
  }
  const addBad = newValue => {
    console.log('bad value now', newValue)
    setBad(newValue)
  }


  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => addGood(good + 1)} text="Good" />
      <Button handleClick={() => addNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => addBad(bad + 1)} text="Bad" />
      <div>
        <Statistics good={good} neutral={neutral} bad={bad}
        all={all} average={average} positive={positive} />
      </div>
    </div>
  )
}

export default App