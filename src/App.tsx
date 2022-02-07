import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

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
