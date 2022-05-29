import { React, useState } from 'react'
import "./Input.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Input = (props) => {

    const [currentType, setCurrentType] = useState(props.type)
    const [ignoreTypeState, setIgnoreTypeState] = useState(false)

    if (currentType === "date" && !(ignoreTypeState)) {
        setCurrentType("text")
    }

    const inputElement = (
        <input
            className="Input"
            placeholder={props.placeholder}
            value={props.value}
            type={currentType}
            onChange={props.setOnChange ? (e) => {
                props.setOnChange(e.target.value)
            } : () => { }}
            onFocus={() => {
                if (props.type === "date") {
                    setCurrentType("date")
                    setIgnoreTypeState(true)
                }
            }}
            onBlur={() => {
                if (props.type === "date") {
                    setCurrentType("text")
                    setIgnoreTypeState(false)
                }
            }}
        />)

    if (!props.icon) {
        return inputElement
    }

    return (
        <div className="InputWithIcon">
            <div
                className="Icon"
                style={{
                    background: props.iconBackground
                }}>
                <FontAwesomeIcon icon={props.icon} />
            </div>
            {inputElement}
        </div>
    )

}

Input.defaultProps = {
    iconBackground: "#51CCA3"
}

export default Input