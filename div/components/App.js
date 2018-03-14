import React from 'react';
// NavBar Data
import NavBar from '../containers/NavBar';
// Header Search Data
import HeaderSearch from '../containers/HeaderSearch';
// Filter Data 
import BodyData from '../containers/bodyBestOffer/BodyData';
// Footer Data 
import Footer from '../containers/Footer';


const App = () => {
    return(
        <div>            
            <NavBar/>
            <HeaderSearch/>
            <BodyData/>            
            <Footer/>
        </div>
    );
}
export default App;