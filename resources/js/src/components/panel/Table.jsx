import React from 'react'

export default function Table({ accounts }) {
    const items = Array.from(accounts) //Funciom que convierte en array para usar map
    
    return (
        <div className="col-sm-12 col-md-8">
            <table className="table table-responsive-sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Usuario</th>
                        <th>Clave</th>
                        <th>Fecha vecimiento</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((account) => (
                            <tr key={account.id}>
                                <td>{account.user}</td>
                                <td>{account.passwd}</td>
                                <td>{account.user}</td>
                                <td>{account.date}</td>
                                <td>
                                    <a className="btn btn-info" href="#"><i className="fas fa-edit"></i></a>
                                    <a href="#" className="btn btn-outline-danger" ><i className="fas fa-trash-alt"></i></a>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}
