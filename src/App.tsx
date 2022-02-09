import React from 'react';
import './App.scss';
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import SmartBulb from "./pages/smartBulb/SmartBulb";
import SmartOutlet from "./pages/smartOutlet/SmartOutlet";
import SmartTemperatureSensor from "./pages/smartTemperatureSensor/SmartTemperatureSensor";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <div>
                <Home/>
                <SmartBulb/>
                <SmartOutlet/>
                <SmartTemperatureSensor/>
            </div>
        </div>
    );
}

export default App;
