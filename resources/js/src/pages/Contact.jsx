import React from 'react'
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact">
        <div className="container">
            <h1 className="text-center py-3 text-light">Contáctame</h1>
            <div className="col-sm-12 col-md-8 mx-auto">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <div className="card">
                            <img src="./images/social-icon.png" width="310" alt="icon redes sociales" />
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6">
                        <div className="card">
                            <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                <a href="https://t.me/noscriptsh"><span className="telegram-icon"><i class="fab fa-telegram fa-8x"></i></span></a>
                                
                                <p className="pt-1">Telegram personal. En esta red social estoy mas activo para responder sus dudas</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card my-3">
                    <h3 className="p-3 m-0">Canal official de telegram <a className="text-dark" href="https://t.me/hivevpntk">Unirse</a></h3>
                </div>
            </div>
        </div>
    </div>
  )
}
