import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () =>{
    return(
        <>
         <div className='container-fluid nav_bg'>
            <div className='row'>
                <div className='col-10 mx-auto'>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/" exact>Siddhi Rajput</NavLink>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" activeClassName='menu_active' to="/" exact>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link" activeClassName='menu_active' to="/service" exact>Services</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link" to="/about" activeClassName='menu_active' exact>About</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink className="nav-link" to="/contact" activeClassName='menu_active' exact>Contact</NavLink>
                                </li>
                            </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar;