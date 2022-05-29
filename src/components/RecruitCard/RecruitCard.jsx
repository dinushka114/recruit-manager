import React from 'react'
import "./RecruitCard.css"

const RecruitCard = (props) => {
  return (
    <input
      className="Input"
      placeholder={'props.placeholder'}
      value={props.value}
      type={'currentType'}
      disabled={true}

    />
  )
}

export default RecruitCard