import React from 'react'
import "./Button.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Button = (props) => {

    let children = (
        <>
            {props.icon && <FontAwesomeIcon icon={props.icon} />}
            {props.children}
        </>
    )

    return (
        <button
            className={`${props.className ? props.className : ''} Button`}
            type={props.type}
            style={{
                color: props.color,
                background: props.background
            }}
            onClick={props.onClick}
        >
            {children}
        </button>
    )
}

Button.defaultProps = {
    background: "#51CCA3",
    children: "Button Component",
    type: "submit",
    color: "white"
}

export default Button