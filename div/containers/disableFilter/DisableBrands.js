import React, { Component } from 'react';
class DisableBrands extends Component{  
    render(){
        return this.props.dataBrands.map((brandName, i)=>{
            return(
                <div key={i}>
                    <input type='hidden' name = {brandName.name} value = {brandName.name}/>        
                </div>
            )  
        });              
    }
}
export default DisableBrands;