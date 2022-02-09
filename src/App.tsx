import React from 'react';
import './App.scss';
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";
import SmartBulb from "./components/smartBulb/SmartBulb";
import SmartOutlet from "./components/smartOutlet/SmartOutlet";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <div>
                <Home/>
                <SmartBulb/>
                <SmartOutlet/>
            </div>
        </div>
    );
}

export default App;
