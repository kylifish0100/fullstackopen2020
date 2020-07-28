import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h2>
      {props.content}
    </h2>
  )
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
) 

const Statistic = (props) => {
  return (
    <tr>
      <td>{props.text}</td><td>{props.value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const allClicks = props.history
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad
  if(allClicks.length === 0)
  return (
    <p>No feedback given</p>
  )
  else{
    return(
      <div>
        <table>
          <tbody>
            <Statistic text="good" value ={good} />
            <Statistic text="neutral" value ={neutral} />
            <Statistic text="bad" value ={bad} />
            <Statistic text="all" value ={allClicks.length} />
            <Average history={allClicks} />
            <Positive history={allClicks} />
          </tbody>
        </table>
      </div>
    )}
}

const Average = (props) => {
  let sum = 0
  const allClicks = props.history
  allClicks.map((allClick) => sum += allClick)
  return(
    <tr>
      <td>average</td><td>{sum/allClicks.length}</td>
    </tr>
)}

const Positive = (props) => {
  const allClicks = props.history
  let count = allClicks.reduce((n, x) => n + (x === 1), 0)
  return (
    <tr>
      <td>positive</td><td>{count/allClicks.length*100} %</td>
    </tr>
   )}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleClickGood = () => {
    setAll(allClicks.concat(1))
    setGood(good + 1)
  }
  const handleClickNeutral = () => {
    setAll(allClicks.concat(0))
    setNeutral(neutral + 1)
  }
  const handleClickBad = () => {
    setAll(allClicks.concat(-1))
    setBad(bad + 1)
  }
  
  return (
    <div>
      <Header content='give feedback'/>
      <Button handleClick={handleClickGood} text='good' />
      <Button handleClick={handleClickNeutral} text='neutral' />
      <Button handleClick={handleClickBad} text='bad' />
      <Header content='statistics'/>
      <Statistics history={allClicks} good={good} neutral={neutral} bad={bad} />
    </div>
  )
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
)
