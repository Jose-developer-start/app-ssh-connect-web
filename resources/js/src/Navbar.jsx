import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">HIVE VPN Websocket PREMIUM</Link>
                <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>


                        <li className="nav-item active">
                            <Link className="nav-link" to="/login">Login <span className="sr-only">(current)</span></Link>
                        </li>

                        <li className="nav-item active">
                            <Link className="nav-link" to="/panel">Panel <span className="sr-only">(current)</span></Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}
