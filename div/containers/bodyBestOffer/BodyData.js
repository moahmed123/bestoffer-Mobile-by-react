import React, { Component } from 'react';
//Import Filter Component
import FilterData from './FilterData';
//Import Mobile Data Component
import MobileData from './MobileData';

class BodyData extends Component{
    render(){
        return(
            <section className="body-data">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 Filter">
                            <FilterData/>
                        </div>
                        <div className="col-md-9 Data">
                            <div>
                                <div className="col-md-12 sort-by">
                                    <h5>Sort By </h5>
                                    <select className='sort-by' id="sort-by-value">
                                        <option value="desc">Price: high to low</option>
                                        <option value="asc">Price: low to high</option>
                                        <option value="recommend">Recommended</option>
                                    </select>
                                </div>
                                <MobileData/>                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>            
        );
    }
}
export default BodyData;