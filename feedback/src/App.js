//https://fullstackopen.com/en/part2/rendering_a_collection_modules#exercises-2-1-2-5

import React, { useState } from 'react'

const Header = ({ title }) => {
  return (
    <div>
      <h1> {title} </h1>
    </div>
  );
}

const FeedButton = ({val, setter, text}) => {
  return (
    <button onClick={() => setter(val+1)}> {text} </button>
  );
}

const Inputs = ({good, neutral, bad, setGood, setNeutral, setBad}) => {
  return (
    <div>
      <FeedButton val={good} setter={setGood} text={"good"} />
      <FeedButton val={neutral} setter={setNeutral} text={"neutral"} />
      <FeedButton val={bad} setter={setBad} text={"bad"} />
    </div>
  );
}

const Stats = ({good, neutral, bad}) => {
  if(good == 0 && neutral == 0 && bad == 0){
    return(
      <div>
      <p> No Feedback given. </p>
      </div>
    );
  }else{
    return (
      <div>
        <h1> statistics </h1>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {good + neutral + bad}</p>
        <p>average {(good - bad) / (good + neutral + bad)}</p>
      </div>
    );
  }
}

const App = () => {

  const title = "give feedback <3";
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header title={title} />
      <Inputs good={good} neutral={neutral} bad={bad} setGood={setGood} setNeutral={setNeutral} setBad={setBad} />
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App