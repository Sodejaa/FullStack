import { useState } from 'react'
const Display = props => <div>{props.text}{props.good}{props.neutral}{props.bad}{props.all}{props.positive}{props.average}</div>


const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)


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
      <h2>Statistics</h2>
      <Display text='Good: ' good={good} />
      <Display text='Neutral: ' neutral={neutral} />
      <Display text='Bad: ' bad={bad} />
      <Display text='All: ' all={all} />
      <Display text='Average: ' average={average} />
      <Display text='Positive: ' positive={positive} /> 
    </div>
  )
}

export default App