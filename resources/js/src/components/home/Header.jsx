import React from 'react'
import "./header.css"
export default function Header() {
    return (
        <div>
            <header>
                <div className="container d-flex h-100 flex-column justify-content-center align-items-around">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center align-items-center">
                            <h1 className="header__title">SSH + WEBSOCKET</h1>
                            <p>Cuentas gratis y premium</p>
                        </div>
                        <div className="col-sm-12 col-md-6 d-flex justify-content-center">
                            <div className="ticket shadow-lg">
                                <div className="ticket__header">
                                    <h3>2</h3>
                                </div>
                                <div className="ticket__footer">
                                    <p>Un pais</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </header>
        </div>
    )
}
