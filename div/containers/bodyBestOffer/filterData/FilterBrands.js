import React, { Component } from 'react';

class FilterBrands extends Component{
    render(){
        return(
            <div>                
                <input type='checkbox' name='brands' value={this.props.brandsData.name}/>
                <label>{this.props.brandsData.name}</label>
            </div>
        )
    }
}
export default FilterBrands;