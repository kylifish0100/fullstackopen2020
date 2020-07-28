import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <h2>
      {props.content}
    </h2>
  )
}

function rand(maxLimit = 6) {
  let rand = Math.random() * maxLimit
  return Math.floor(rand)
}

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const max = (arr) => {
  let maxVote=arr[0]
  let maxtemp=0
  for(var i=0;i<arr.length;i++)
  {
    if(arr[i]>maxVote)
      {
        maxVote=arr[i]
        maxtemp=i
      }
  }
  return(
    maxtemp
  )
}

const VotesResult = (props) => {
  console.log(props.arr)
  if(props.arr.every(x=>x===0))
    {return(
      <div>No votes yet</div>
    )}
  else{
    return(
      <div>
        <p>{props.anecdotes[max(props.arr)]}</p>
        <p>has {props.votes[max(props.arr)]} votes</p>
      </div>
    )
  }
}

const App = ({ anecdotes }) => {
  const original = new Array(6).fill(0)
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(original)


  const handleclickS = () => setSelected(rand(6))
  const updateVotes = (index) => {
    const newvotes = [...votes]
    newvotes[index] += 1
    setVotes(newvotes)
  }

  return (
    <div>
      <Header content="Anecdote of the day" />
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
      <Button handleClick={() => updateVotes(selected)} text="vote" />
      <Button handleClick={handleclickS} text="next anecdote" />
      <Header content="Anecdote with most votes" />
      <VotesResult arr={votes} anecdotes={anecdotes} votes={votes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)