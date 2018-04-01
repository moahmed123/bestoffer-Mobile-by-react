import React, { Component } from 'react';
import * as  actionCreatores from '../actions/index';
import {connect} from 'react-redux';

class HeaderSearch extends Component{
    SearchProducts(){
        
    }
    render(){
        return(
            <section className="homepage">
                <div className="container">
                    <div className='row'>
                        <div className="content text-center">                                     
                            <div className="search_frm">                                
                                <input id='search-name-products' type="search"  placeholder="What type of work do you need?"/>
                                <a className='btn btn-success' onClick = {()=>{                                    
                                    let lengthForInput =  document.querySelector('#filter-form').length,                                                     
                                        linkBrands     = '',
                                        linkPrice      = '',
                                        linkOperatSys  = '',
                                        linkNameSite   = '',
                                        offset         = '',
                                        x              = ',',
                                        y,
                                        valueSearchProduct = document.getElementById("search-name-products").value;
                                        console.log(valueSearchProduct);
                                    // Function When Filter Change                                                     
                                    {this.props.onChangeFilter(lengthForInput,linkBrands,linkPrice,linkOperatSys,linkNameSite,x,y,offset,valueSearchProduct)};                                    
                                }}>click</a>                                
                                <span>
                                    <b>Offer:</b>
                                    <a href="/explore/psd-to-html-30.html">Mobile</a>,
                                    <a href="/explore/logo-design-10.html">TV</a>,
                                    <a href="#">...</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>           
            </section>
        );
    }
}
function mapStateToProps(state){
    return{
        MobData: state.mobileData
    };
}
export default connect(mapStateToProps, actionCreatores)(HeaderSearch);
//export default HeaderSearch;