import React, { Component } from 'react';
// Box Best Deals 
import FirstDeals from './FirstDeals';
// Data Grouping ==> Deals 
import GroupingData from './GroupingData';

class BoxMobData extends Component{
    firstMobDeals(){
        if(!this.props.databox.deals){
            return <div>loading ...</div>;
        }
        //slice(0,1) Get First MobData For Index [0]
        return this.props.databox.deals.slice(0,1).map((Firstdata, i)=>{
            return(
                <div key={i}>
                    <FirstDeals data = {Firstdata} keyData={i}/>                    
                </div>
            );
        })
    }
    getDataGrouping(){   
        if(!this.props.databox.deals){
            return <div>loading ...</div>;
        }     
        //slice(1) to loop Start For Index [1] not [0]
        return this.props.databox.deals.slice(1).map((dataG, i)=>{            
            return(
                <div key={i}>
                    <GroupingData data = {dataG} keyGrouping = {i}/>                    
                </div>
            );
        })
    }
    render(){
        return(
            <div>
                <div className='col-md-3 img-sale'>
                    <img src={this.props.databox.photo} onError={(event)=>{
                          const SelectImage = event.target;// To Select Image Error 
                          // set image Not Found
                          SelectImage.attributes[0].value = "https://ae01.alicdn.com/kf/HTB1.WDyRFXXXXcYXVXXq6xXFXXXC/black-white-letter-print-404-background-not-found-Hard-Back-Cover-Phone-Case-For-iphone-4.jpg_640x640.jpg";                          
                    }} className = 'img-responsive'/>
                </div>
                <div className='col-md-6 data-sale'>
                    <h4>{this.props.databox.name}</h4>
                    <span>{this.props.databox.brand}</span>
                    <h4>DataGrouping</h4>
                    {this.getDataGrouping()}
                </div>
                <div className='col-md-3'>
                    {this.firstMobDeals()}
                </div>                
            </div>
        )
    }
}
export default BoxMobData;