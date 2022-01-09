import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

import Home from "./pages/Home";

import Panel from "./pages/Panel";


import Payment from "./pages/Payment";
import Websocket_usa from "./components/premiumSSH/Websocket_usa";
import AccountCanada from "./components/accountsFree/AccountCanada";
import WebsocketAccount from "./components/accountsFree/WebsocketAccount";
import ScannerHost from "./pages/ScannerHost";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";

function App() {
    return (
        <>
            <Router>
                <Navbar />

                <Routes>
                    <Route exact path="/" element={<Home />} />
                    
                    <Route path="/websocket/us1" element={<WebsocketAccount />} />
                    <Route path="/canada/toronto/1" element={<AccountCanada />} />

                    <Route path="/login" element={<SignIn />} />
                    <Route path="/registrarse" element={<SignUp />} />

                    <Route path="/panel" element={<Panel />} />
                    <Route path="/payment" element={<Payment />} />
                    <Route path="/escanear-host" element={<ScannerHost />} />

                    {/**Rutas de servidores premium**/}
                    
                    <Route path="/websocket/unit-state/usa1" element={<Websocket_usa />} />
                </Routes>

                <Footer />
            </Router>
        </>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
