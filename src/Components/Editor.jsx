import React from 'react'

const Editor = () => {
  return (
    <div id='editor-container' className='containers'>
        <header id='container-header'>
            <h2>Editor</h2>
        </header>
        <textarea name="editor-text" id="editor"></textarea>
        {/* <input type="textarea" name='editor-text' id='editor' /> */}
    </div>
  )
}

export default Editor