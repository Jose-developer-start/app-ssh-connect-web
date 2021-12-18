import React from 'react'
import { Link } from 'react-router-dom'

export default function PanelIcon() {
    return (
        <div className="col-sm-12 col-md-4">
            <div className="row">
                <div className="col-md-4">
                    <Link to={""} className="text-dark">
                        <div className="card">
                            <div className="card-body">
                                <i className="fas fa-terminal fa-2x"></i>
                                SSH
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
