import React from 'react'

export default function ListAccount(props) {
    return (
        <div className="container">
            <h2 className="text-center title-server mb-3">{props.title}</h2>
            <div className="row">
                {props.children}
            </div>
        </div>
    )
}
