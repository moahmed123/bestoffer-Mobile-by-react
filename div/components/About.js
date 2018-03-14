import React from 'react';
// NavBar Data
import NavBar from '../containers/NavBar';
// Footer Data 
import Footer from '../containers/Footer';

const About = () => {
    return(        
        <div>            
            <NavBar/>
            <h4 className='text-center'> About Page </h4>            
            <Footer/>          
        </div>        

    );
}
export default About;