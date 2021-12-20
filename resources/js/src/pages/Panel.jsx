import React, { useEffect, useState } from 'react'
import PanelIcon from '../components/panel/PanelIcon'
import Table from '../components/panel/Table'
export default function Panel() {
    const [accounts, setAccounts] = useState({});
    const [auth, setauth] = useState(
        sessionStorage.getItem('user') || ""
    )
    const authData = JSON.parse(auth)
    const BASE_API_URL = location.origin + "/api/users/" + authData.id;
    const fetchPost = async () => {
        const response = await fetch(BASE_API_URL, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        const result = await response.json();
        setAccounts([...result.data])
    }
    useEffect(() => {
        fetchPost();
    }, [])
    
    if (auth != "") {

        return (

            <div className="container my-4">
                <div className="card" >
                    <h5 className="card-header">
                        <i className="fas fa-store-alt"> </i> Administración de SSH(ASSH)
                    </h5>
                </div>

                <div className="card-body shadow-sm">
                    <div className="row">
                        <PanelIcon />
                        <Table accounts={accounts} />

                    </div>
                </div>


            </div>
        )
    }else{
        return (
            <div className="container my-4">
                <div className="card" >
                    <h5 className="card-header">
                        <i className="fas fa-store-alt"> </i> Administración de SSH(ASSH)
                    </h5>
                </div>

                <div className="card-body shadow-sm">
                    <div className="row">
                        <h2>Para visualizar tus cuentas debes de acceder al sistema</h2>

                    </div>
                </div>


            </div>
        )
    }

}
