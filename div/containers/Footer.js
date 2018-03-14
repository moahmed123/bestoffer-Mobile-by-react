import React, { Component } from 'react';

class Footer extends Component{
    render(){
        return(
            <div>
                <footer className='footer-three'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-4 menu">
                                <h3>Overview</h3>
                                <ul>
                                    <li>
                                        <a href="features.html">Features</a>
                                    </li>
                                    <li>
                                        <a href="services.html">Services</a>
                                    </li>
                                    <li>
                                        <a href="pricing.html">Pricing</a>
                                    </li>
                                    <li>
                                        <a href="support.html">Support</a>
                                    </li>
                                    <li>
                                        <a href="blog.html">Blog</a>
                                    </li>
                                    <li>
                                        <a href="blog.html">Coming soon</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-sm-4 menu">
                                <h3>Menu</h3>
                                <ul>
                                    <li>
                                        <a href="features.html">About us</a>
                                    </li>
                                    <li>
                                        <a href="services.html">Contact us</a>
                                    </li>
                                    <li>
                                        <a href="aboutus.html">Jobs</a>
                                        <a href="aboutus.html" className="hiring btn-appsun">
                                            We're hiring!
                                        </a>
                                    </li>
                                    <li>
                                        <a href="support.html">Portfolio</a>
                                    </li>
                                    <li>
                                        <a href="blog.html">Status</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-2 col-sm-4 menu">
                                <h3>Social</h3>
                                <ul>
                                    <li>
                                    <a href="features.html">Youtube</a>
                                    </li>
                                    <li>
                                    <a href="services.html">Facebook</a>
                                    </li>
                                    <li>
                                    <a href="pricing.html">Twitter</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4 col-sm-12 newsletter">
                                <div className="signup clearfix">
                                    <p>
                                        Sign up for the newsletter and we'll inform you of updates, offers and more.
                                    </p>
                                    <form>
                                        <input type="text" name="email" className="form-control" placeholder="Your email address"/>
                                        <input type="submit" value="Sign up" className="btn-appsun"/>
                                    </form>
                                </div>
                                <a href="#">
                                    <img src="images/social-tw.png" alt="twitter"/>
                                </a>
                                <a href="#">
                                    <img src="images/social-dbl.png" alt="dribbble"/>
                                </a>
                            </div>
                            </div>            
                    </div> 
                </footer>
                <div className ="credits copyright">
                    <p className ="text-center">Copyright © 2019 </p>
                </div>  
            </div>           
        );
    }
}
export default Footer;