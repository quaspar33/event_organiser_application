import logo from './logo.svg';
import './App.css';
import React from 'react';
import MenuBar from './componets/MenuBar.js';
import LoginWindow from "./componets/LoginWindow";

function App() {
    return (
        <div id="app">
            <div className="menu-bar">
                <MenuBar />
            </div>
            <div className="content">
                <div className="square">
                    <LoginWindow />
                </div>
                <div className="square">
                    <img src={logo} className="App-logo rotating-image" alt="logo" />
                </div>
            </div>
        </div>
    );
}

export default App;
