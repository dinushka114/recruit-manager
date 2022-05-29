import React from 'react'
import Background from "../images/Background.png"
import "./View.css"

const View = (props) => {

    const getHeader = () => {
        if (!(props.title || props.subtitle)) {
            return
        }

        return (
            <div className="Header">
                <div className="Title">
                    {props.title && <h1>{props.title}</h1>}
                    {props.subtitle && <p>{props.subtitle}</p>}
                </div>
                <div className="Content">
                    {props.headerContent}
                </div>
            </div>
        )
    }

    return (
        <div className={`View ${props.className ? props.className : ''}`}>
            {getHeader()}

            <div className="Contents">
                {props.children}
            </div>

            {props.background && <img src={props.background} alt="Background" className="Background" />}
        </div>
    )
}

View.defaultProps = {
    background: Background
}

export default View
