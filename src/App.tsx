import React from 'react';
import './App.scss';
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import SmartBulb from "./pages/smartBulb/SmartBulb";
import SmartOutlet from "./pages/smartOutlet/SmartOutlet";
import SmartTemperatureSensor from "./pages/smartTemperatureSensor/SmartTemperatureSensor";
import RoutesPage from "./components/Routes";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <div>
                <RoutesPage/>
            </div>
        </div>
    );
}

export default App;
