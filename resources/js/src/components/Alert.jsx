import React from 'react'

export default function Alert(props) {
    return (
        <div className="alert alert-warning">
            {props.msg}
        </div>
    )
}
