import React from  'react';
import NavBar from '../NavBar';

function Header(){
    return (
        <header className="header-bar bg-dark">
            <div className="header-logo"><i className="fa fa-spinner"></i> COUCH</div>
            <div className="header-menu">
                <NavBar/>
            </div>        
        </header>
    )
    
}
export default Header;