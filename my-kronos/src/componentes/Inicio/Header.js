import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Home from '../../pages/Home';
import Comentarios from '../../pages/Comentarios';
import Tutorial from '../../pages/Tutorial';
import Xbox from '../../pages/Xbox 360';
import XboxOne from '../../pages/Xbox One';
import Computadoras from '../../pages/Computadoras';


class Header extends Component {
    render() {
        return (
            
            <Router>
                <div>



                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <Link className="navbar-brand" to="/Inicio">CIBER PALENQUE</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/tutorial">TUTORIAL <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/comentarios">COMENTARIOS</Link>
                                </li>
                                <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Reservaciones
        </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="/Xbox 360">Xbox 360</Link>
                                    <Link className="dropdown-item" to="/Xbox One">XboxOne</Link>
                                    <Link className="dropdown-item" to="/Computadora">Computadoras</Link>
                        
                                    <div className="dropdown-divider"></div>
                                   
                                </div>
                                
                            </li>
                               
                            </ul>
                            
                        </div>
                    </nav>
  

                    <div>
                <Switch>
                    <Route path="/Inicio"  exact component={Home}/>
                    <Route path="/comentarios"  exact component={Comentarios}/>
                    <Route path="/tutorial"  exact component={Tutorial}/>
                    <Route path="/Xbox 360"  exact component={Xbox}/>
                    <Route path="/Xbox One"  exact component={XboxOne}/>
                    <Route path="/Computadora"  exact component={Computadoras}/>

                </Switch>
                </div>

                </div>



            </Router>
        );
    }
}

export default Header;