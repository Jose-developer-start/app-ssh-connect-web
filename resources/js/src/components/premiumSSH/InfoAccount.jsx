import React from 'react'

export default function InfoAccount({data}) {
    return (
        <div className="container">
            <h4 className="py-3 text-center text-dark">Su cuenta SSH y Websocket se a creado, {data.user}</h4>
            <div className="row">
                <div className="col-sm-12 col-md-6">

                    <div className="p-2 bg-white rounded shadow-sm mb-2">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item py-2">WS Domain 1: internet-vip.cf
                                <span className="badge badge-primary badge-pill" /><i className="far fa-check-circle"></i>
                            </li>
                            <li className="list-group-item py-2">WS Domain 2: ssh-ws.tk
                                <span className="badge badge-primary badge-pill" /><i className="far fa-check-circle"></i>
                            </li>
                            <li className="list-group-item py-2">Port: SSL/TLS 443, HTTP 80 <span className="badge badge-primary badge-pill" /><i className="far fa-check-circle"></i></li>
                            <li className="list-group-item py-2">Port SSH: 22
                                <span className="badge badge-primary badge-pill" /><i className="far fa-check-circle"></i>
                            </li>
                            <li className="list-group-item py-2">Limit Acc: 100</li>
                            <li className="list-group-item py-2">Active: 15 Dias</li>
                            <li className="list-group-item py-2">Port UDP: 7400
                                <span className="badge badge-primary badge-pill" /><i className="far fa-check-circle"></i>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6">

                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                        <p>
                            GET shi://host.com HTTP/1.1[crlf]Host: ssh-ws.tk[crlf]Upgrade: websocket[crlf][crlf]
                        </p>

                        <p>Usuario: {data.user}</p>
                        <p>Clave: {data.passwd} </p>
                        <p>fecha de expiración: {data.date}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
