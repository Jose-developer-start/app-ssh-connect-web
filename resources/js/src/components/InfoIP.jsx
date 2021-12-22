import React, { useEffect } from 'react'

export default function InfoIP({ data }) {
    return (
        <div className="alert m-0 p-0 alert-success">
            <div className="container">
                <div className="d-flex justify-content-between m-0 p-0">

                    <p className="m-0 p-0">IP: {data.ip} </p>


                    <p className="m-0 p-0">Pais: {data.country}</p>

                </div>
            </div>
        </div>
    )
}
