import { useState } from 'react'
import ListNotes from './components/ListNotes'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ListNotes />
    </div>
  )

}

export default App
