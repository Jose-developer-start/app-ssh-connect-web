import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Routes,
    Link,
    Route,
} from "react-router-dom";
import Add from "./components/Add";
import Edit from "./components/Edit";
import Footer from "./Footer";
import Navbar from "./Navbar";
import AccountSSH from "./pages/AccountSSH";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Panel from "./pages/Panel";
import SignUp from "./pages/SignUp";

function App() {
    return (
        <Router>
            <Navbar />
            
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/websocket/us1" element={<AccountSSH />} />
                    <Route path="/login" element={<SignIn />} />
                    <Route path="/registrarse" element={<SignUp />} />
                    
                    <Route path="/panel" element={<Panel />} />
                    <Route path="/edit/:id" element={<Edit />} />
                </Routes>
            
            <Footer />
        </Router>
    );
}

export default App;

if (document.getElementById("app")) {
    ReactDOM.render(<App />, document.getElementById("app"));
}
