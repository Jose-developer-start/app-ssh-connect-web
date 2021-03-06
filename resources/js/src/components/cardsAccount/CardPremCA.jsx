import React from 'react'
import { Link } from 'react-router-dom'
export default function CardPremCA() {
    return (
        <div className="col-sm-12 col-md-6 mb-3">
            <div className="my-2 p-2 bg-white rounded shadow-sm">
                <div className="d-flex text-muted">
                    <div className="d-flex justify-content-between">
                        <img className="me-3" src="./images/accounts/ca.png" alt="Canada Toronto" width="48" height="35" />
                    </div>
                    <div className="pb-2 mb-0 small lh-sm w-100">
                        <div className="d-flex justify-content-between">
                            <strong className="text-gray-dark">Canada - Toronto 31 días</strong>
                        </div>
                        <span className="badge bg-primary mt-1"><svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="css-i6dzq1"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> 31 Días</span>
                        <span className="badge bg-primary mt-1">
                            <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" className="css-i6dzq1"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 10</span>
                    </div>
                    <div className="mt-auto p-2 bd-highlight">
                        <Link to={"/websocket/canada/toronto1"} className=" text-dark btn btn-outline-primary" role="button">Crear</Link>
                    </div>
                </div>
                <div className="small border-top">
                    <span className="badge bg-success">Online</span>
                    <span className="badge bg-primary">Host: canada.vip1.hivevpn.tk</span>
                    <span className="badge bg-dark text-white">DNS Host: 1.1.1.1</span>
                </div>
            </div>
        </div>
    )
}