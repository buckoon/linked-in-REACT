import React from 'react'
import "./InputOption.css"

function InputOption({Icon, title, color}) {/* These are your destructured props*/
  return (
    <div className="inputOption">
        <Icon style={{color:color}}/>
        <h4>{title}</h4>
    </div>
  )
}

export default InputOption