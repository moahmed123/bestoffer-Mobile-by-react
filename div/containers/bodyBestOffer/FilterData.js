import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import * as actionCreatores from '../../actions/index';
import {connect} from 'react-redux';
// Send Data To Show Filter Brands .
import FilterBrands from './filterData/FilterBrands';
// Send Data To Show Filter prices.
import FilterPrices from './filterData/FilterPrices';
// Send Data To Show Filter Operating System.
import FilterOperatS from './filterData/FilterOperatS';
// Send Data To Show Filter SiteName.
import FilterSiteName from './filterData/FilterSiteName';

class FilterData extends Component{
    componentDidMount(){                     
        {this.props.GetDataFilter()}
        // Dispatch Action To Get MobileData
        {this.props.GetDataMobile()}  
        // Event Listener To Change Form . 
        document.getElementById("filter-form").addEventListener("change",() => {            
            let lengthForInput =  document.querySelector('#filter-form').length,
                linkBrands     ='',
                linkPrice      ='',
                linkOperatSys  = '',
                linkNameSite   = '',
                offset         = '',
                searchMob      = '',
                x              = ',',
                y;
            // Function When Filter Change 
            {this.props.onChangeFilter(lengthForInput,linkBrands,linkPrice,linkOperatSys,linkNameSite,x,y,offset,searchMob)};                
            //{this.onChangeFilter(lengthForInput,linkBrands,linkPrice,linkOperatSys,linkNameSite,x,y)};
        }); 
        // Event Listener To Sort By. 
        document.getElementById("sort-by-value").addEventListener("change",() => {            
            let lengthForInput =  document.querySelector('#filter-form').length,
                linkBrands     ='',
                linkPrice      ='',
                linkOperatSys  = '',
                linkNameSite   = '',
                offset         = '',
                searchMob      = '',                
                x              = ',',
                y;
            // Function When Filter Change                 
            {this.props.onChangeFilter(lengthForInput,linkBrands,linkPrice,linkOperatSys,linkNameSite,x,y,offset,searchMob)};                
            //{this.onChangeFilter(lengthForInput,linkBrands,linkPrice,linkOperatSys,linkNameSite,x,y)};
        });                           
    }      
    // Fun Brands .
    FilterBrandsFun(){
        if(!this.props.data){
            return <div> Loading ... </div>;
        }
        return this.props.data['brands'].map((databrands, i)=>{            
            return(
                <div key = {i}>
                    <FilterBrands  brandsData = {databrands} key={i}/>                    
                </div>
            );
        });
    }
    // Fun Prices .
    FilterPricesFun(){                  
        if(this.props.data){
            return(
                <div>
                    <FilterPrices  pricesData = {this.props.data['prices']} />                    
                </div>
            );  
        }
              
    }
    // Fun Operating System .
    FilterOperatingSystem(){
        if(!this.props.data){
            return <div> Loading ... </div>;
        }   
        return this.props.data['os'].map((data, i)=>{
            return(
                <div key= {i}>
                      <FilterOperatS  OSData = {data}/>                    
                </div>
            );
        });
    }       
    // Sites 
    FilterSitesName(){
        if(!this.props.data){
            return <div> Loading ... </div>;
        }
        return this.props.data['sites'].map((data, i)=>{
            return(
                <div key= {i}>
                      <FilterSiteName  siteData = {data}/>                    
                </div>
            );
        });
    }                        
    render(){        
        return(                  
        <form id='filter-form'>
            {this.FilterBrandsFun()}                       
            <h4>prices</h4>                
            {this.FilterPricesFun()}
            <h4>operating system</h4>            
            {this.FilterOperatingSystem()}                
            <h4>SitesName</h4> 
            {this.FilterSitesName()}
        </form>                                              
        );
    }
}
function mapStateToProps(state){
    return{
        data: state.filterData
    };
}
export default connect(mapStateToProps,actionCreatores)(FilterData);