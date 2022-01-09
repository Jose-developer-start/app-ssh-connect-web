import React from 'react'

export default function Loading({ title }) {
    return (
        <div className="bg-login">
            <div className="container d-flex flex-column justify-content-center">
                <h2 className="text-center py-5">{ title }</h2>
                <div className="d-flex justify-content-center">
                    <img src="https://res.cloudinary.com/ddfsqcy12/image/upload/v1641674859/loading_ntquy6.gif" alt="Loading" className="loading" />
                </div>

            </div>
        </div>
    )
}
