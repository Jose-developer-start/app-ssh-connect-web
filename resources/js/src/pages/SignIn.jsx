import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Alert from '../components/Alert';

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [authUser, setAuthUser] = useState(
        sessionStorage.getItem('user') || ''
    )

    const [result, setResult] = useState(null);

    const onSubmit = (e) => {
        e.preventDefault();

        if(email == "" || password == ""){
            setResult("Rellena todos los campos!!");
            return 0;
        }

        const fetchPost = async () => {
            
            const BASE_API_URL = location.origin +"/api/login";
            let data = {
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
            if (postJson.data.name != "") {

                setAuthUser(sessionStorage.setItem('user', JSON.stringify(postJson.data)));
            } else {
                setResult(postJson.data.result)
            }
            //console.log(postJson.data)
        }
        fetchPost();
    }

    //sessionStorage.removeItem('user')
    if (authUser != "") {
        setTimeout(() => {
            location.href = location.origin

        }, 1000);
        return (
            <div className="bg-login">
                <div className="container">
                    <h2 className="text-center py-5">Validando tu información...</h2>
                </div>
            </div>
        )

    }
    return (
        <div className="img-login">
            <div className="container">
                <h1 className="h2 text-center text-muted text-light py-4">Bienvenido a Hive VPN</h1>
                <div className="row">
                    <div className="col-md-4 mx-auto">
                        <div className="card shadow-lg mb-5">
                            <div className="card-body">
                                <form method="POST" onSubmit={onSubmit}>
                                    <h2 className="h3 text-dark text-center pb-2">Acceder</h2>
                                    {result == null ? "" : <Alert msg={result} />}

                                    <div className="form-group">
                                        <input name="email" value={email} type="text" onChange={(e) => { setEmail(e.target.value) }} className="form-control" placeholder="Correo electrónico" />
                                    </div>
                                    <div className="form-group">
                                        <input name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" className="form-control" placeholder="Clave" />
                                    </div>
                                    <button className="btn btn-green btn-secondary btn-block">Acceder</button>
                                    <Link to={"/registrarse"} className="text-muted text-secondary mt-3">Registrate</Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
