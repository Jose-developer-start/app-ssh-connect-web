import React from 'react'

export default function Footer() {
    return (
        <footer class="position-relative" id="footer-main">
            <div class="footer pt-lg-7 footer-dark bg-dark">

                <div class="container pt-4">
                    <div class="row justify-content-center">
                        <div class="col-lg-12">
                            <div class="row align-items-center">
                                <div class="col-lg-7">
                                    <h3 class="text-secondary mb-2">Hive VPN</h3>
                                    <p class="lead mb-0 text-white opacity-8">Este proyecto aún se encuentra en desarrollo</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    
                    <hr class="divider divider-fade divider-dark my-4" />
                    <div class="row align-items-center justify-content-md-between pb-4">
                        <div class="col-md-6">
                            <div class="copyright text-sm font-weight-bold text-center text-md-left">©
                                <a href="https://webpixels.io" class="font-weight-bold" target="_blank">Hive VPN | @noscriptsh</a>.All rights reserved</div>
                        </div>
                        <div class="col-md-6">
                            <ul class="nav justify-content-center justify-content-md-end mt-3 mt-md-0">
                                <li class="nav-item"><a class="nav-link" href="#">Terms</a></li>
                                <li class="nav-item"><a class="nav-link" href="#">Privacy</a></li>
                                <li class="nav-item"><a class="nav-link" href="#">Cookies</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
