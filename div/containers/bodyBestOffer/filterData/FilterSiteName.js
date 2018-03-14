import React, { Component } from 'react';

class FilterSiteName extends Component{
    render(){
        return(
            <div>
                <input type='checkbox' name='site-name' value={this.props.siteData.name}/>
                <label>{this.props.siteData.name}</label>
                <span>{this.props.siteData._count}</span>  
            </div>
        );
    }
}
export default FilterSiteName;