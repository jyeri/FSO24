import { useState } from 'react'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const StaticLine = (props) => {
    return (
      <tr>
        <td>
          {props.text}
        </td>
        <td>
          {props.value}
        </td>
      </tr>
    )
  }

  const Statistics = (props) => {

    return (
      (props.good === 0 && props.neutral === 0 && props.bad === 0)?
        <div>
          No feedback given
        </div>
      :
      <table>
        <tbody>
          <StaticLine text="good" value={props.good}/>
          <StaticLine text="neutral" value={props.neutral}/>
          <StaticLine text="bad" value={props.bad}/>
          <StaticLine text="all" value={props.good + props.neutral + props.bad}/>
          <StaticLine text="average" value={(props.good - props.bad) / (props.good + props.neutral + props.bad)}/>
          <StaticLine text="positive" value={props.good / (props.good + props.neutral + props.bad) * 100 + " %"}/>
        </tbody>
      </table>
    )
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>
        good
      </button>
      <button onClick={() => setNeutral(neutral + 1)}>
        neutral
      </button>
      <button onClick={() => setBad(bad + 1)}>
        bad
      </button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App