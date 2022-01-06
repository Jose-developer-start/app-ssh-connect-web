import React, { useEffect, useState } from 'react'
import InfoIP from './components/InfoIP';
export default function Footer() {
    const [infoIP, setInfoIP] = useState({})
    const fetchIP = async ()=>{
        const response = await fetch("https://ipinfo.io/json?token=3dcbe47dedccdb");
        const result = await response.json();
        //console.log(result.country)
        setInfoIP({...result});
    }
    useEffect(()=>{
        fetchIP()
    },[])
    return (
        <footer className="bg-dark" id="footer-main">
            <div className="footer__content-main">
                <h3 className="footer__content-title text-center py-4 m-0">CONECTADOS A HIVE VPN</h3>
            </div>
            <div className="container">
            <hr className="text-light opacity-8" />
            <div className="row">
                <div className="col-sm-12 col-md-4 d-flex justify-content-center align-items-center">
                    <p className="footer__text footer__copy">All reserved a HIVE-VPN.tk</p>
                </div>
                <div className="col-sm-12 col-md-4 d-flex justify-content-center align-items-center">
                    <a href="https://t.me/noscriptsh"><i class="uil uil-telegram footer__icon"></i></a>
                </div>
                <div className="col-sm-12 col-md-4 d-flex justify-content-center align-items-center">
                    <p className="footer__power footer__text m-0 p-0">By @noscriptsh</p>
                </div>
            </div>
            </div>
            <InfoIP data={infoIP} />
        </footer>
    )
}
