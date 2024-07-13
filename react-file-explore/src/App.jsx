import { useState } from 'react'
import './App.css'
import FileExplore from './components/FileExplore'
import data from "./data.json"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FileExplore folderData={data}/>
    </>
  )
}

export default App
