import React from 'react';
// NavBar Data
import NavBar from '../containers/NavBar';
// Footer Data 
import Footer from '../containers/Footer';
// Header Search Data
import HeaderSearch from '../containers/HeaderSearch';
// Filter Data 
import BodyData from '../containers/bodyBestOffer/BodyData';
const About = () => {
    return(        
        <div>            
            <NavBar/>
            <HeaderSearch/>
            <h4 className='text-center'> About Page </h4>
            <div className='hidden' id='component-search'>
            <BodyData/>              
            </div>
            
            <Footer/>          
        </div>        

    );
}
export default About;