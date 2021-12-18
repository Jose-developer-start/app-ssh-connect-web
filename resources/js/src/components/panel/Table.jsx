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
                                    Online
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>
        </div>
    )
}
