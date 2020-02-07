import React from 'react'

function SucsessBlock(props) {
    return <div className={`messageadded ${props.text}`}>
    {props.text}
    </div>
}

export default SucsessBlock