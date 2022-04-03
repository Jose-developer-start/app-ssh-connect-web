import React from 'react';

export default function CreatedAccount({user,passwd,date,payload,dominio1,ip}) {
    return (
        <div className="container">
            <h4 className="py-3 text-center text-dark">Su cuenta SSH y Websocket se a creado, {user}</h4>
            <div className="row">
                <div className="col-sm-12 col-md-6">

                    <div className="p-2 bg-white rounded shadow-sm mb-2">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item py-2">WS Domain 1: {dominio1}
                                <span className="badge badge-primary badge-pill" /><i className="far fa-check-circle"></i>
                            </li>
                            <li className="list-group-item py-2">IP : {ip}
                                    <span className="badge badge-primary badge-pill" /><i className="far fa-check-circle"></i>
                                </li>
                            <li className="list-group-item py-2">Port: TLS 443, HTTP 80 <span className="badge badge-primary badge-pill" /><i className="far fa-check-circle"></i></li>
                            <li className="list-group-item py-2">Port SSH: 22
                                <span className="badge badge-primary badge-pill" /><i className="far fa-check-circle"></i>
                            </li>
                            <li className="list-group-item py-2">Limit Acc: 100</li>
                            <li className="list-group-item py-2">Active: 3 Dias</li>
                            <li className="list-group-item py-2">Port UDP: 7300
                                <span className="badge badge-primary badge-pill" /><i className="far fa-check-circle"></i>
                            </li>

                        </ul>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6">

                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                        <p>
                            {payload}
                        </p>
                        <p>Usuario: {user}</p>
                        <p>Clave: {passwd} </p>
                        <p>fecha de expiración: {date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
