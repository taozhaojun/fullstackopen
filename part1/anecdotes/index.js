import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the coed as cleverly as possibly, you are, by definition, not smart enough to debug it."
];

ReactDOM.createRoot(document.getElementById('root')).render(<App anecdotes={anecdotes}/>)