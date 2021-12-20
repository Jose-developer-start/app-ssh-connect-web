import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Alert from '../components/Alert';

export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [result, setResult] = useState(null);
    const [loading, setLoading] = useState(false); //Button State

    const onSubmit = (e) => {
        e.preventDefault();
        
        if(name == "" || email == "" || password == ""){
            setResult("Rellena todos los campos!!")
            return 0;
        }

        const fetchPost = async () => {
            const BASE_API_URL = location.origin + "/api/register";
            let data = {
                'name': name,
                'email': email,
                'password': password
            }
            const postsFetch = await fetch(BASE_API_URL, {
                "method": "POST",
                "body": JSON.stringify(data),
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            })
            const postJson = await postsFetch.json();
            //console.log(postJson.data);
            setResult(postJson.data); //useState Result
        }
        setLoading(true)
        fetchPost();
        //Clear imput
        setName("");
        setEmail("");
        setPassword("");
    }
    useEffect(()=>{
        setLoading(false)
    },[onSubmit])
    return (
        <div className="img-login">
            <div className="container">
                <h1 className="h2 text-center text-muted text-light py-4">Bienvenido a Hive VPN</h1>
                <div className="row">
                    <div className="col-md-4 mx-auto">
                        <div className="card shadow-lg mb-5">
                            <div className="card-body">
                                <form method="POST" onSubmit={onSubmit}>
                                    <h2 className="h3 text-dark text-center pb-2">Registrate</h2>
                                    { result == null ? "" : <Alert msg={result} /> }
                                    <div className="form-group">
                                        <input name="name" value={name} onChange={(e) => { setName(e.target.value) }} type="text" className="form-control" placeholder="Nombre" />
                                    </div>
                                    <div className="form-group">
                                        <input name="email" value={email} type="text" onChange={(e) => { setEmail(e.target.value) }} className="form-control" placeholder="Correo electrónico" />
                                    </div>
                                    <div className="form-group">
                                        <input name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" className="form-control" placeholder="Clave" />
                                    </div>
                                    <button disabled={loading} className="btn btn-success btn-block"> {loading ? "Creando tu cuenta...": "SignUp"} </button>
                                    <Link to={"/login"} className="text-muted text-secondary mt-3">Acceder</Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
