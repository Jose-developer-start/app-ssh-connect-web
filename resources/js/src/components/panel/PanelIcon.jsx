import React from 'react'
import "./Icon.css";
export default function PanelIcon({setMenu}) {
    return (
        <div className="col-sm-12 col-md-4">
            <div className="row">
                <div className="col-sm-6 col-md-5">
                    <div  onClick={()=>setMenu(1)} className="text-dark mb-3 tarj-icon">
                        <div className="card">
                            <div className="card-body">
                                <i className="fas fa-terminal fa-2x"></i>
                                SSH
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-5">
                    <div  onClick={()=>setMenu(2)} className="text-dark mb-3 tarj-icon">
                        <div className="card">
                            <div className="card-body">
                                <i class="fas fa-globe fa-2x"></i>
                                Payload
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
