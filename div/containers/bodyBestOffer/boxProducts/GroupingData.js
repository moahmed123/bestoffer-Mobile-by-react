import React, { Component } from 'react';

class GroupingData extends Component{
    render(){
        return(
            <div>
                {this.props.data.link}<br/>
                {this.props.data.price}<br/>
                {this.props.data.color}
            </div>
        );
    }
}
export default GroupingData;