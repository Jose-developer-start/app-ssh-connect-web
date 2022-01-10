import React, { useState } from 'react'
import swal from 'sweetalert';

export default function AddUser() {
    const [user,setUser] = useState('');
    const [passwd,setPasswd] = useState('');
    const [date,setDate] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!user || !passwd){
            swal('Error','Los campos estan vacios','error');
            return;
        }
        if(/\s/.test(user) || /\s/.test(passwd)){
            swal('Error','No puede contener espacios','error');
            return 0;
        }
        const BASE_URL_API = location.origin;
        let data = {
            "user" : user,
            "passwd": passwd,
            "date": date,
            "user_id": 1,
            "country": "US"
        };
        const fetchPost = async ()=>{
            const response = await fetch(BASE_URL_API + "/api/create_ssh",{
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            });
            const result = await response.json();
            console.log(result)
            setUser('')
            setPasswd('')
            setDate('')
            swal('Exito!','Su usuarios se a instanciado!','success');
        }
        fetchPost();
        
    }
    return (
        <div className="col-sm-12 col-md-8">
            <div className="card-header">
                <h3 className="text-muted text-dark text-center">Agregar SSH</h3>
            </div>
            <div className="card-body">
                <form action="" onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <div className="form-group">
                                <input className="form-control" value={user} onChange={(e)=>setUser(e.target.value)} type="text" placeholder="Usuario" />
                            </div>
                            <div className="form-group">
                                <input className="form-control" value={passwd} onChange={(e)=>setPasswd(e.target.value)} type="text" placeholder="clave" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <div className="form-group">
                                <input type="date" onChange={(e)=> setDate(e.target.value)} className="form-control" />
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-success btn-sm">Agregar</button>
                </form>
            </div>
        </div>
    )
}
