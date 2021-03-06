import React, { useEffect, useState } from 'react'
import swal from 'sweetalert';
import AddUser from '../components/panel/AddUser';
import PanelIcon from '../components/panel/PanelIcon'
import Payload from '../components/panel/Payload';
import Table from '../components/panel/Table'
export default function Panel() {
    const [accounts, setAccounts] = useState({});
    const [auth, setauth] = useState(
        sessionStorage.getItem('user') || ""
    )
    const [menu, setMenu] = useState(1);

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
    const deleteSSH = (id)=>{
        //FETCH A API
        const BASE_API_URL = location.origin + "/api/websockets/" + id;

        swal({
            title: "¿Estas seguro de realizar esta acción?",
            text: "Esta acción eliminara la cuenta SSH!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Cuenta eliminado!", {
                icon: "success",
              });
              fetchDelete()
            } else {
              swal("Cancelado!");
            }
          });

        const fetchDelete = async () => {
            const response = await fetch(BASE_API_URL, {
                "method": "DELETE",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            })
            const result = await response.json();
            fetchPost();
        }
    }
    useEffect(() => {
        setInterval(()=>{
            fetchPost()
        },5000)
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
                        {
                            (authData.rol_id == 1) ? (
                                <>
                                    <PanelIcon setMenu={setMenu} />
                                    {(menu == 1) && (
                                        <Table accounts={accounts} deleteSSH={deleteSSH} />
                                    )
                                    }
                                    {(menu == 2) && (
                                        <Payload />                                        
                                    )
                                    } 
                                    {(menu == 3) && (
                                        <AddUser />                                        
                                    )
                                    }  
                                </>
                            ) : (

                                <>
                                    <PanelIcon setMenu={setMenu} />
                                    {(menu == 1) && (
                                        <Table accounts={accounts} deleteSSH={deleteSSH} />
                                    )
                                    }
                                    {(menu == 2) && (
                                        <Payload />                                        
                                    )
                                    }  
                                </>
                            )
                        }

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
