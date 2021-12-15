import React, { useEffect, useState } from 'react'
import "./websocketAccount.css"
export default function WebsocketAccount() {
    const [user, setUser] = useState(null);
    const [passwd, setPasswd] = useState(null);
    const [loading, setLoading] = useState(false);
    const [account, setAccount] = useState([]);

    var today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const onSubmit = (e) => {
        e.preventDefault();
        let data = {
            "date": date,
            "user": user,
            "passwd": passwd
        }
        const fetchCreatedAccount = async () => {
            const result = await fetch("http://localhost:8000/api/websockets", {
                "method": "POST",
                "body": JSON.stringify(data),
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                }
            });
            const dataJson = await result.json();
            console.log(dataJson)
            setAccount(dataJson);
        }
        fetchCreatedAccount();
    }
    useEffect(() => {

    }, [account])
    if (account.length != 0) {
        return (
            <div className="container">
                <h4 className="py-3 text-center text-dark">Su cuenta SSH y Websocket se a creado, {account.user}</h4>
                <div className="row">
                    <div className="col-sm-12 col-md-6">

                        <div className="p-2 bg-white rounded shadow-sm mb-2">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item py-2">WS Domain : internet-vip.cf
                                    <span className="badge badge-primary badge-pill" /><i className="far fa-check-circle"></i>
                                </li>
                                <li className="list-group-item py-2">Port: TLS 443, HTTP 80 <span className="badge badge-primary badge-pill" /><i class="far fa-check-circle"></i></li>
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
                    <div className="col-sm-12 col-md-6">

                        <div class="alert alert-warning alert-dismissible fade show" role="alert">
                            <p>GET shi://host.com HTTP/1.1
                                Host: internet-vip.cf
                                Upgrade: websocket[crlf][crlf]</p>

                            <p>Usuario: {account.user}</p>
                            <p>Clave: {account.passwd} </p>
                            <p>fecha de expiración: {account.date}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <>
            <div className="container">
                <h2 class="text-center title-server my-5">SERVER</h2>
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
                                        <li className="list-group-item py-2">WS Domain : internet-vip.cf
                                            <span className="badge badge-primary badge-pill" /><i className="far fa-check-circle"></i>
                                        </li>
                                        <li className="list-group-item py-2">Port: TLS 443, HTTP 80 <span className="badge badge-primary badge-pill" /><i class="far fa-check-circle"></i></li>
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
                                            <label for="username" className="form-label">Username</label>
                                            <div className="input-group">
                                                <span className="input-group-text">Hive VPN</span>
                                                <input type="text" onChange={(e) => { setUser(e.target.value); }} className="form-control" name="user" id="username" placeholder="username" required />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label for="password" className="form-label">Password</label>
                                            <div className="input-group">
                                                <span className="input-group-text">Hive VPN</span>
                                                <input type="text" onChange={(e) => { setPasswd(e.target.value) }} className="form-control" name="passwd" id="password" placeholder="clave" required />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label for="hostname" className="form-label">Domain: </label>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="hostname" value="0" checked="" />
                                                <label className="form-check-label" for="openv2ray.com">internet-vip.cf <span className="badge bg-success">Valid SSL</span></label>
                                            </div>
                                        </div>

                                        <button type="submit" className="btn btn-primary btn-sm w-100 subb">Create</button>

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
