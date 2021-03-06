import React, { Component } from 'react';
import * as  actionCreatores from '../../actions/index';
import {connect} from 'react-redux';
// Import Box Mobile Data  To Show It 
import BoxMobData from './boxProducts/BoxMobData';

class MobileData extends Component{           
    mapMobData(){
        if(!this.props.MobData){
            return <div> Loading ... </div>;
        }
        return this.props.MobData['results'].map((data , i) => {
            return(
                <li key = {i} className ='div-data-mobile col-md-12'>                    
                    <BoxMobData databox = {data} key = {i}/>
                </li>
            );
        });
    }    
    render(){
        if(!this.props.MobData){
            return <div> Loading ... </div>;
        }         
        const count = Math.ceil(this.props.MobData['_count'] / 20);                   
        return(
            <div>
                <ul className= 'row'>                
                    {this.mapMobData()}                                        
                </ul>                           
                {/* <nav aria-label="Page navigation example text-center">
                    <ul className="pagination justify-content-center" id='pagination'>                     
                        {Array.apply(null, Array(count)).map((item, i) =>{
                            return(
                                <li key={i}>
                                    <a onClick={(event) =>{
                                            const valChecked = event.target;//Select element Click To Get Value
                                            if(valChecked){
                                                let  offset         = valChecked.attributes[0].value,
                                                     lengthForInput =  document.querySelector('#filter-form').length,                                                     
                                                     linkBrands     = '',
                                                     linkPrice      = '',
                                                     linkOperatSys  = '',
                                                     linkNameSite   = '',
                                                     x              = ',',
                                                     y;                                                     
                                                     // Function When Filter Change                                                     
                                                     {this.props.onChangeFilter(lengthForInput,linkBrands,linkPrice,linkOperatSys,linkNameSite,x,y,offset)};
                                                     // To Remove Class Active From All Link Pagination
                                                     for(var ii = 0; ii < document.querySelectorAll(".Pagination-link").length; ii++){                                                                                                              
                                                         // Loop For All Link Pagination 
                                                        document.querySelectorAll(".Pagination-link")[ii].classList.remove('active');
                                                     }
                                                     // Add Class Active For LinkPagination Click It 
                                                     valChecked.classList.add('active');                                                     
                                            }
                                        }} value = {i * 20} className = 'Pagination-link'>{i}</a>
                                </li>
                            )                            
                        })}
                    </ul>
                </nav>                 */}
            </div>
        )
    }
}
function mapStateToProps(state){
    return{
        MobData: state.mobileData
    };
}
export default connect(mapStateToProps, actionCreatores)(MobileData);