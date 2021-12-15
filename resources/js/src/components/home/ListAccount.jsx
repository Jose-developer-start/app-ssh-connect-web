import React from 'react'
import { Link } from 'react-router-dom'

export default function ListAccount() {
    return (
        <div className="container">
            <h2 class="text-center title-server mb-3">Servidores disponibles</h2>
            <div className="row">
                <div className="col-sm-12 col-md-6 mb-3">
                    <div class="my-2 p-2 bg-white rounded shadow-sm">
                        <div class="d-flex text-muted">
                            <div class="d-flex justify-content-between">
                                <img class="me-3" src="./images/accounts/us.png" alt="United States" width="48" height="35" />
                            </div>
                            <div class="pb-2 mb-0 small lh-sm w-100">
                                <div class="d-flex justify-content-between">
                                    <strong class="text-gray-dark">United States  1 </strong>
                                </div>
                                <span class="badge bg-primary mt-1"><svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> 3 Días</span>
                                <span class="badge bg-primary mt-1">
                                    <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> 17 / 150</span>
                            </div>
                            <div class="mt-auto p-2 bd-highlight">
                                <Link to="/websocket/us1" class=" text-dark btn btn-outline-primary" role="button">Crear</Link>
                            </div>
                        </div>
                        <div class="small border-top">
                            <span class="badge bg-success">Online</span>
                            <span class="badge bg-primary">Host: internet-vip.cf</span>
                            <span class="badge bg-dark text-white">DNS Host: 1.1.1.1</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
