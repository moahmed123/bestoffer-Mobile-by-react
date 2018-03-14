import React, { Component } from 'react';

class Filterprices extends Component{
    componentDidMount(){

        let elm       = document.querySelector('.input-range'),
            container = elm.parentNode,
            values    = elm.getAttribute('data-values').split(' ');
        values.forEach(function (value, i, values) {
        let rangePart  = elm.cloneNode();
        rangePart.type = 'range';
        rangePart.removeAttribute('data-values');
        rangePart.value = value;
        rangePart = container.insertBefore(rangePart, elm);
    });
        elm.remove();
    }
    render(){
        return(
            <div>
                <input className='input-range' type="range" multiple name ='price' min= {this.props.pricesData._min} step="1000" max = {this.props.pricesData._max} data-values="1 20550"/>                              
            </div>
        )
    }
}
export default Filterprices;