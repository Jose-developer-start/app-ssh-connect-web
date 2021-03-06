import React from 'react'

export default function Payload() {
    return (
        <div className="col-sm-12 col-md-8">
            <h3 className="text-muted text-secondary my-4">Payload | Selecciona según tu cuenta creada</h3>
            <div className="row">
                <div className="col-sm-12 col-md-6">
                    <div className="card mb-3 shadow-lg">
                    <p className="card-header">Toronto/Ca Domain</p>
                        <div className="card-body">
                            <p>
                            GET shi://sni.cloudflaressl.com HTTP/1.1[crlf]Host: canada.vip1.hivevpn.tk[crlf]Upgrade: websocket[crlf][crlf]
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-12 col-md-6">
                    <div className="card mb-3 shadow-lg">
                    <p className="card-header">Unite State Domain</p>
                        <div className="card-body">
                            <p>
                            GET shi://sni.cloudflaressl.com HTTP/1.1[crlf]Host: vip1.hivevpn.tk[crlf]Upgrade: websocket[crlf][crlf]
                            </p>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>



    )
}
