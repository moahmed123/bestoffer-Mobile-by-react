import React, { Component } from 'react';

class FilterOperatS extends Component{
    render(){
        return(
            <div>
                <input type='checkbox' name='operatsys' value={this.props.OSData.name}/>
                <label>{this.props.OSData.name}</label>
                <span>{this.props.OSData._count}</span>                
            </div>
        );
    }
}
export default FilterOperatS