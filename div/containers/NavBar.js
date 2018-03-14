import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

class NavBar extends Component{
    render(){
        return(             
            <nav>                                                       
                 <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation </span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>                                                            
                        <a className="navbar-brand smoothScroll" href="#home">BestOffer</a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">          
                        <ul className="nav navbar-nav navbar-right">
                            <li id="browsenavright">                                                            
                                <Link to={'/'}>Home</Link> 
                            </li>
                            <li>
                            <Link to={'/about'}>about</Link>           
                            </li>
                            <li>
                                <a href="#home" className="smoothScroll">FAQ</a>
                            </li>
                            <li className="buttonsell">
                                <a href="#home" className="smoothScroll">sell</a>
                            </li>                        
                        </ul>                            
                    </div>
                </div>                              
            </nav>                                                                
        );
    }
}
export default NavBar;