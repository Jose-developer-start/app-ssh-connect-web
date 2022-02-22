import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import "./AccountFreeUSA.css"
import CreatedAccount from './CreatedAccount';
export default function AccountFreeUSA() {
    const [auth, setAuth] = useState(sessionStorage.getItem('user') || "");
    const [authData, setAuthData] = useState(null)
    const [user, setUser] = useState("");
    const [passwd, setPasswd] = useState("");
    const [loading, setLoading] = useState(false);
    const [account, setAccount] = useState([]);

    var today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const onSubmit = (e) => {
        e.preventDefault();
        if(/\s/.test(user) || /\s/.test(passwd)){
            swal('Error','No puede contener espacios','error');
            return 0;
        }

        let data = {
            "user_id": authData.id,
            "date": date,
            "user": user,
            "passwd": passwd,
            "country": "New York/USA"
        }
        const BASE_URL_API = location.origin;
        const fetchCreatedAccount = async () => {
            const result = await fetch(BASE_URL_API + "/api/websockets/us/us1", {
                "method": "POST",
                "body": JSON.stringify(data),
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            });
            const dataJson = await result.json();
            //console.log(dataJson)
            setAccount(dataJson);
        }
        setLoading(true);
        fetchCreatedAccount();
    }
    useEffect(() => {
        if (auth != "") {
            setAuthData(JSON.parse(auth))
        }
    }, [account])
    if (account.length != 0) {
        return (
            <CreatedAccount user={account.user} passwd={account.passwd} date={account.date} payload={"GET / HTTP/1.1[crlf]Host: usa1.v2ray-usa.tk[crlf]Upgrade: websocket[crlf][crlf]"} dominio1={"usa1.v2ray-usa.tk"} ip={"159.203.170.193"} />
        )
    }
    return (
        <>
            <div className="container">
                <h2 className="text-center title-server my-5">SERVER</h2>
                <div className="card shadow-lg mb-3">
                    <div className="card-header">
                        <h3 className="text-center text-dark">New York</h3>
                        <h5 className="text-center">1</h5>
                    </div>
                    <div className="card-body">
                        <div className="row g-2">
                            <div className="col-md-4">
                                <div className="p-2 bg-white rounded shadow-sm mb-2">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item py-2">WS Domain : usa1.v2ray-usa.tk
                                            <span className="badge badge-primary badge-pill" /><i className="far fa-check-circle"></i>
                                        </li>
                                        <li className="list-group-item py-2">Port: TLS 443, HTTP 80 <span className="badge badge-primary badge-pill" /><i className="far fa-check-circle"></i></li>
                                        <li className="list-group-item py-2">Port SSH: 22
                                            <span className="badge badge-primary badge-pill" /><i className="far fa-check-circle"></i>
                                        </li>
                                        <li className="list-group-item py-2">Limit Acc: 100</li>
                                        <li className="list-group-item py-2">Active: 3 Dias</li>
                                        <li className="list-group-item py-2">Port UDP: 7400
                                            <span className="badge badge-primary badge-pill" /><i className="far fa-check-circle"></i>
                                        </li>

                                    </ul>
                                </div>
                            </div>

                            <div className="col-md-8">
                                <div className="p-2 bg-white rounded shadow-sm mb-2">
                                    <div className="textad"></div>
                                    <form method="post" onSubmit={onSubmit}>
                                        <div className="mb-3">
                                            <label htmlFor="username" className="form-label">Username</label>
                                            <div className="input-group">
                                                <span className="input-group-text">Hive VPN</span>
                                                <input type="text" onChange={(e) => { setUser(e.target.value); }} className="form-control" name="user" id="username" placeholder="username" required />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="password" className="form-label">Password</label>
                                            <div className="input-group">
                                                <span className="input-group-text">Hive VPN</span>
                                                <input type="text" onChange={(e) => { setPasswd(e.target.value) }} className="form-control" name="passwd" id="password" placeholder="clave" required />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="hostname" className="form-label">Domain: </label>
                                            <div className="form-check">

                                                <label className="form-check-label" htmlFor="openv2ray.com">usa1.v2ray-usa.tk <span className="badge bg-success">Valid SSL</span></label>
                                            </div>
                                        </div>

                                        {
                                            (auth != "") ? (
                                                <button type="submit" disabled="true" disabled={loading} className="btn btn-primary btn-sm w-100 subb">{loading ? "Creando...": "Create"}</button>
                                            ) : (
                                                <Link to="/login" className="btn btn-secondary btn-block" >Login</Link>
                                            )
                                        }

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
