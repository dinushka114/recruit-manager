import React from 'react'
import "./HeadText.css"

const HeadText = (props) => {
    return (
        <div className="HeadText">
            <div className="Header">
                <span className='title'>
                    {props.title}
                </span>
                <div className="line"></div>
            </div>
        </div>
    )
}

export default HeadText