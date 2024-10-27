import React from 'react';
import "./Header.scss";

function Header(){
    return (
        <header className="header">
        <h1 className="header__logo">BrainFlix</h1>
        <input type="text" className="header__search" placeholder="Search" />
        <button className="header__upload">UPLOAD</button>
      </header>
    );
}

export default Header;