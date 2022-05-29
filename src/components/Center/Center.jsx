import React from 'react'
import "./Center.css"

const Center = (props) => {
    return (
        <div className={`Center ${props.className}`}>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default Center