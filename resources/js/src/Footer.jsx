import React from 'react'

export default function Footer() {
    return (
        <footer className="position-relative" id="footer-main">
            <div className="footer pt-lg-7 footer-dark bg-dark">

                <div className="container pt-4">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="row align-items-center">
                                <div className="col-lg-7">
                                    <h3 className="text-secondary mb-2">Hive VPN</h3>
                                    <p className="lead mb-0 text-white opacity-8">Este proyecto aún se encuentra en desarrollo</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    
                    <hr className="divider divider-fade divider-dark my-4" />
                    <div className="row align-items-center justify-content-md-between pb-4">
                        <div className="col-md-6">
                            <div className="copyright text-sm font-weight-bold text-center text-md-left">©
                                <a href="https://webpixels.io" className="font-weight-bold" target="_blank">Hive VPN | @noscriptsh</a>.All rights reserved</div>
                        </div>
                        <div className="col-md-6">
                            <ul className="nav justify-content-center justify-content-md-end mt-3 mt-md-0">
                                <li className="nav-item"><a className="nav-link" href="#">Telegram</a></li>
                                <li className="nav-item"><a className="nav-link" href="#">Cookies</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
