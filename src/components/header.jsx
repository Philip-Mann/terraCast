import React from 'react';
import logo from '../terracast.png'
// import logo2 from '../logo2.svg'


export default function Header() {

    return (
        <div className="header">
            {/* <img className="App-logo" src={logo} alt="logo"/>
            <h1>Terra Cast</h1>
            <img className="App-logo2" src={logo2} alt="logo"/> */}
            <img src={logo} alt="logo" />
        </div>
    )
}