import { set } from 'lodash'
import React, { useState } from 'react'

export default function Info() {
    const [count, setCount] = useState(1)
    const incrementMegas = ()=>{
        if(count > 25){
            setCount(1);
        }else{
            setCount(count + 1)
        }
    }
    setTimeout(()=>{
        incrementMegas()
    },1000)
    return (
        <div className="container my-4">
            <h2 className="text-muted text-dark text-center mb-4">Soporte para juegos y llamadas</h2>
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
            <div className="row text-center text-lg-left mt-15 mt-lg-20 align-items-center">
                <div className="col-12 col-lg-6 mb-15 mb-lg-0">
                    <div className="col-sm-12 col-md-6 d-flex justify-content-center">
                        <div className="freefire__logo">

                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6 d-flex align-items-center">
                    <div className="pl-0 pl-xl-7 pr-0 pr-xl-16">
                        <h1 className="mb-0">Testeado en Free fire y WhatSapp</h1>
                        <p className="mt-8 mb-0">Estos servidores que ofrecemos ofrecen estabilidad y ping bajo para Videojuegos y estan ubicados en Norte America, así, disponemos de mas paises. Disfruta de la navegación por VPN.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
