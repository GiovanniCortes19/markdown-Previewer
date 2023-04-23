import React from 'react'
import { useState } from 'react'
import Preview from './Preview'

// marked.setOptions({
//     breaks: true
// })

// const renderer = new marked.Renderer()


const Editor = () => {

  const [text, setText] = useState("")

  function handleChange(event){
    const {value} = event.target
    setText(value)
  }

  return (
    <>
        <div id='editor-container' className='containers'>
            <header id='container-header'>
                <h2>Editor</h2>
            </header>
            <textarea name="text" id="editor" value={text} onChange={handleChange} ></textarea>
        </div>
        <Preview markdown={text}/>
    </>
  )
}

export default Editor