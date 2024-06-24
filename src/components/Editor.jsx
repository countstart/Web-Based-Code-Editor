import React, { useState } from 'react'
import "codemirror/lib/codemirror.css"
import "codemirror/theme/material.css"
import "codemirror/mode/xml/xml"
import "codemirror/mode/javascript/javascript"
import "codemirror/mode/css/css"
import { Controlled as ControlledEditor } from "react-codemirror2";

function Editor(props) {
    const {
        language,
        displayName,
        value,
        onChange
    } = props

    function handleChange(editor,data,value){
        onChange(value)
    }

    const [open,setOpen] = useState(false);
    const [buttonName,setButtonName] = useState('wide');

    const onButtonChange = ()=>{
      setOpen(prev => !prev);
      if(open) setButtonName('wide')
      else setButtonName('small')
    }

  return (
    <div className={`code-editor ${open ? 'collapse' : '' }`}>
      <div className='editor-title'>
        {displayName}
        <button
          onClick={onButtonChange}
          className='wide-collapse-button'
        >{buttonName}</button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className='code-mirror-wrapper'
        options={{
            lineWrapping : true,
            lint : true,
            mode : language,
            lineNumbers:true,
            theme:'material'
        }}
       />
    </div>
  )
}

export default Editor
