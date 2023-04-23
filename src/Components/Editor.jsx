import React from 'react'
import { useState } from 'react'
import Preview from './Preview'


const Editor = () => {

  const [text, setText] = useState("")
  const [isHidden, setIsHidden] = useState(false)

  function toggleHidden(){
    setIsHidden(prev => !prev)
  }

  function handleChange(event){
    const {value} = event.target
    setText(value)
  }

  return (
    <>
        {!isHidden && <div id='editor-container' className='containers'>
            <header id='container-header'>
                <h2>Editor</h2>
                <button className='hide-btn' onClick={toggleHidden}>{`< hide`}</button>
            </header>
            <textarea name="text" id="editor" value={text} onChange={handleChange} ></textarea>
        </div>}
        {isHidden && <button id='isHidden-btn' className='hide-btn' onClick={toggleHidden}>{`Show editor`}</button>}
        <Preview markdown={text}/>
    </>
  )
}

export default Editor