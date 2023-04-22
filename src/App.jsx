import { useState } from 'react'
import Editor from './Components/Editor'
import Preview from './Components/Preview'

function App() {


  return (
    <div id='app-container'>
      <Editor/>
      <Preview/>
    </div>
  )
}

export default App
