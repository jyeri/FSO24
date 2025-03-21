import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.',
    'this is a test'
  ]
   
  const [selected, setSelected] = useState(0)
  const votes = new Array(anecdotes.length).fill(0)
  const [vote, setVote] = useState(votes)

  const handleVote = () => {
    console.log(`Vote button pressed for anecdote: "${selected}"`)
    const copy = [...vote]
    copy[selected] += 1
    setVote(copy)
    console.log(`Votes are now: ${copy}`)
  }

  const handleNextAnecdote = () => {
    console.log('Next anecdote button pressed')
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <br />
      <button onClick={handleVote}>
        vote
      </button>
      <button onClick={handleNextAnecdote}>
        next anecdote
      </button>
      <h1>Anecdote with most votes</h1>
      {Math.max(...vote) > 0 ? (
        anecdotes[vote.indexOf(Math.max(...vote))]
      ) : (
        <p>no votes have been given</p>
      )}
    </div>
  )
}

export default App