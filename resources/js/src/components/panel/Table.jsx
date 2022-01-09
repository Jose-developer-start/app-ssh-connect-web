import React from 'react'

export default function Table({ accounts,deleteSSH }) {
    const items = Array.from(accounts) //Funciom que convierte en array para usar map
    //Contador de id
    let id = 1;
    if (!items.length) {
        return (
            <div className="d-flex justify-content-center">
                <div className="alert alert-warning">
                    <h4 className="text-muted text-dark">Cargando...</h4>
                </div>
            </div>
        )
    }
    return (
        <div className="col-sm-12 col-md-8">
            <table className="table table-responsive-sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>País</th>
                        <th>Usuario</th>
                        <th>Clave</th>
                        <th>Fecha vecimiento</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((account) => (
                            <tr key={account.id}>
                                <td>{id++}</td>
                                <td>{account.country}</td>
                                <td>{account.user}</td>
                                <td>{account.passwd}</td>
                                <td>{account.date}</td>
                                <td>
                                    <button onClick={()=>deleteSSH(account.id)} className="btn btn-danger btn-sm">
                                        <i className="uil uil-trash-alt"></i>
                                    </button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}
