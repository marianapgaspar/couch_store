import React from  'react';
import NavBar from '../NavBar';

function HomeHeader(props){
    return (
        <header className="header-bar">
            <div className="header-logo"><i className="fa fa-spinner"></i> COUCH</div>
            <div className="header-menu">
                <NavBar/>
            </div>        
        </header>
    )
}
export default HomeHeader;