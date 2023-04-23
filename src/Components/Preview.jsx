import React from 'react'
import {marked} from 'marked'

marked.setOptions({
    breaks: true
})

const renderer = new marked.Renderer()

const Preview = ({markdown}) => {
  return (
    <div id='preview-container' className='containers'>
        <header id='container-header'>
            <h2>Preview</h2>
        </header>
        <div id='preview' dangerouslySetInnerHTML={{
            __html: marked(markdown)
        }}></div>
    </div>
  )
}

export default Preview