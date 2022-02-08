import React from 'react';
import './App.scss';
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home/Home";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <div>
                <Home/>
            </div>
        </div>
    );
}

export default App;
