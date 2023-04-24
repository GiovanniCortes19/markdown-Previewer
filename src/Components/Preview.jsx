import React from 'react'
import {marked} from 'marked'

marked.setOptions({
    breaks: true
})

const renderer = new marked.Renderer()

const Preview = ({markdown}) => {

  const [isHidden, setIsHidden] = React.useState(false)
  
  function toggleHidden(){
    setIsHidden(prev => !prev)
  }

  return (
    <>
      {!isHidden && <div id='preview-container' className='containers'>
          <header id='container-header'>
              <h2>Preview</h2>
              <button className='hide-btn' onClick={toggleHidden}>{`hide`}</button>
          </header>
          <div id='preview' dangerouslySetInnerHTML={{
              __html: marked(markdown)
          }}></div>
      </div>}
      {isHidden && <button id='isHidden-btn' className='hide-btn' onClick={toggleHidden}>show previewer</button>}

    </>
  )
}

export default Preview