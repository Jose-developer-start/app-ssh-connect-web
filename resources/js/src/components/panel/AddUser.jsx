import React from 'react'

export default function AddUser() {
    return (
        <div className="col-sm-12 col-md-8">
            <div className="card-header">
                <h3 className="text-muted text-dark text-center">Agregar SSH</h3>
            </div>
            <div className="card-body">
                <form action="">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="Usuario" />
                            </div>
                            <div className="form-group">
                                <input className="form-control" type="text" placeholder="clave" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <select className="form-control">
                                <option value="">Email</option>
                            </select>
                        </div>
                    </div>
                    <button className="btn btn-success btn-sm">Agregar</button>
                </form>
            </div>
        </div>
    )
}
