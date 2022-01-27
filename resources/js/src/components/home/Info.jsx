import { set } from 'lodash'
import React, { useState } from 'react'

export default function Info() {
    const [count, setCount] = useState(1)
    const incrementMegas = () => {
        if (count > 25) {
            setCount(1);
        } else {
            setCount(count + 1)
        }
    }
    setTimeout(() => {
        incrementMegas()
    }, 1000)
    return (
        <div className="container my-4">
            <h2 className="text-muted text-dark text-center my-4">Soporte para juegos y llamadas</h2>
            <div className="row mb-4">
                <div className="col-lg-3 col-sm-6 mb-3">
                    <div className="d-flex align-items-center">
                        <div className="">
                            <h5 className="h1 font-weight-bolder mb-0">{count}</h5>
                        </div>
                        <div className="pl-3">
                            <h6 className="mb-0">Velocidad hasta de {count} megas por segundo</h6>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 mb-3">
                    <div className="d-flex align-items-center">
                        <div className="">
                            <h5 className="h1 font-weight-bolder mb-0">IP</h5>
                        </div>
                        <div className="pl-3">
                            <h6 className="mb-0">Navegación segura</h6>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 mb-3">
                    <div className="d-flex align-items-center">
                        <div className=""><span className="h1 font-weight-bolder mb-0"><i className="fas fa-gamepad"></i></span></div>
                        <div className="pl-3">
                            <h6 className="mb-0">Funcionales para juegos</h6>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-6 mb-3">
                    <div className="d-flex align-items-center">
                        <div className=""><span className="h1 font-weight-bolder mb-0"><i className="fab fa-whatsapp"></i></span></div>
                        <div className="pl-3">
                            <h6 className="mb-0">Funcional para llamadas</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-sm-12 col-md-6 d-flex justify-content-center">


                    <img src="https://res.cloudinary.com/hive-vpn/image/upload/v1640102866/Garena-Free-Fire_zrpviv.jpg" alt="free fire" className="img__freefire" />
                </div>
                <div className="col-12 col-lg-6 d-flex align-items-center">
                    <div className="pl-0 pl-xl-7 pr-0 pr-xl-16">
                        <h1 className="my-sm-4 text-sm-center">Soporte para Juegos Online</h1>
                        <p className="mt-8 mb-0">Los servidores estan testeado para jugar juegos en linea. Los juegos testeados son: Free fire, Clash royale y Clash Of Clan</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
