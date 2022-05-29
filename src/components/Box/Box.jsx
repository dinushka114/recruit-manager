import React from 'react'
import "./Box.css"

const Box = (props) => {
  return (
    <div className={`Box ${props.padding}Padding ${props.className}`}>
        {props.children}
    </div>
  )
}

Box.defaultProps = {
    padding: "Default"
}

export default Box