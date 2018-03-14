import React, { Component } from 'react';
class FirstDeals extends Component{
    render(){
        return(
            <div>
                {this.props.data.color}<br/>
                {this.props.data.price}<br/>
                {this.props.data.site_name}
            </div>
        )
    }
}
export default FirstDeals;