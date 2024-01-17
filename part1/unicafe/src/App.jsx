import { useState } from 'react'


const Header = (props) => {
  return(
    <div>
    <h1>{props.text}</h1>
    </div>
  )
}



const Statistics = (props) =>{
  return(
    <p>
      Total: {props.good+props.neutral+props.bad}
    <br/>
      Average: {((props.good-props.bad)/(props.good+props.neutral+props.bad)).toPrecision(3)}
    <br/>
      Percentage of positive feedback: {((props.good/(props.good+props.neutral+props.bad))*100).toPrecision(2)}%
    </p>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  console.log(good);
  console.log(neutral);
  console.log(bad); 

  return (
    <div>

    <Header text = "Give feedback, please!" />

      <button onClick = {() => setGood(good+1)} > 
        Good
      </button>
      <button onClick = {() => setNeutral(neutral+1)} > 
        Neutral
      </button>
      <button onClick = {() => setBad(bad+1)} > 
        Bad
      </button>

    <Header text = "Statistics" />

    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>

    <Statistics good = {good} neutral = {neutral} bad = {bad} />

    </div>
  )
}


export default App