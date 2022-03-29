import { decode, encode } from 'js-base64'
import React, { useEffect } from 'react'

export default function CreateV2ray({ uuid, host }) {
  //GET UUID TYPE PROPS
  const getUUID = uuid.split("\n").join("");
  let VMESS = { "v": "2", "ps": "free.v2ray-ssl.tk:443", "add": host, "port": 443, "aid": 0, "type": "", "net": "ws", "path": "/hive-vpn.tk/", "host": "free.v2ray-ssl.tk", "id": getUUID, "tls": "tls" }
  const encodeVmess = encode(JSON.stringify(VMESS));
  //console.log(encodeVmess)

  return (
    <div className="container">
      <h2 className="text-center text-dark my-4">Config VMESS</h2>
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="card mb-4">
            <div className="card-header">
              <div className="input-group">
                <span className="input-group-text">UUID</span>
                <input className="form-control" type="text" readOnly="true" value={getUUID} />
              </div>
            </div>
            <div className="card-body">
              <textarea className="form-control" rows="5" cols="10" readOnly="true">
                {"vmess://" + encodeVmess}
              </textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
