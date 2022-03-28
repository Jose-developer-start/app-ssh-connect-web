import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

import Home from "./pages/Home";

import Panel from "./pages/Panel";

import Payment from "./pages/Payment";
import Websocket_usa from "./components/premiumSSH/Websocket_usa";
import AccountFreeUSA2 from "./components/accountsFree/AccountFreeUSA2";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import AccountFreeUSA from "./components/accountsFree/AccountFreeUSA";
import Websocket_usa2 from "./components/premiumSSH/Websocket_usa2";
import Websocket_ca1 from "./components/premiumSSH/Websocket_ca1";
import Contact from "./pages/Contact";
import UserState from "./components/context/user/UserState";
import Condition from "./pages/Condition";
import V2ray from "./components/accountsFree/V2rayUSA1";

function App() {
    return (
        <>
            <UserState>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />

                    <Route path="/websocket/us1" element={<AccountFreeUSA />} />
                    <Route
                        path="/websocket/usa2"
                        element={<AccountFreeUSA2 />}
                    />

                    <Route path="/login" element={<SignIn />} />
                    <Route path="/registrarse" element={<SignUp />} />

                    <Route path="/panel" element={<Panel />} />

                    <Route path="/payment" element={<Payment />} />

                    <Route path="/terminos-y-condiciones" element={<Condition />} />

                    {/**Rutas de servidores de v2ray*/}

                    <Route path="/v2ray/usa/new-york1" element={ <V2ray /> } />

                    {/**Rutas de servidores premium**/}

                    <Route
                        path="/websocket/unit-state/usa1"
                        element={<Websocket_usa />}
                    />
                    <Route
                        path="/websocket/unit-state/usa2"
                        element={<Websocket_usa2 />}
                    />

                    <Route
                        path="/websocket/canada/toronto1"
                        element={<Websocket_ca1 />}
                    />

                    {/*ROUTER CONTACTO*/}
                    <Route path="/contacto" element={<Contact />} />
                </Routes>
                <Footer />
            </UserState>
        </>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(
        <Router>
            <App />
        </Router>,
        document.getElementById("app")
    );
}
