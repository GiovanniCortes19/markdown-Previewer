import React from 'react'
import { useState } from 'react'
import Preview from './Preview'

const defaultText = `# This is a Markdown previewer!

## h2 header 
### h3 header

Here is a code Block:
\`\`\`
// this is a function:

function square(number) {
  return number * number;
}
\`\`\`
  
**bold** text
_italic_ text
**_both!_**
~~crossed out~~.

You can make [links](https://www.freecodecamp.com) to your favorite websites

And also
> Block Quotes!

Lists are available:
- \`<ul></ul>\`
  - with bullets.
     - indented.

Numbered Lists:
1. \`<ol></ol>\`
1. once started  
1. use whatever 
- you
* want

And lastly embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

const Editor = () => {

  const [text, setText] = useState(defaultText)
  const [isHidden, setIsHidden] = useState(false)

  function clearEditor(){
    setText('')
  }

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
                <div className="buttonsContainer">
                  <button className='hide-btn' onClick={toggleHidden}>{`hide`}</button>
                  <button className='hide-btn' onClick={clearEditor}>{`clear`}</button>
                </div>
            </header>
            <textarea name="text" id="editor" value={text} onChange={handleChange} ></textarea>
        </div>}
        {isHidden && <button id='isHidden-btn' className='hide-btn' onClick={toggleHidden}>{`Show editor`}</button>}
        <Preview markdown={text}/>
    </>
  )
}

export default Editor