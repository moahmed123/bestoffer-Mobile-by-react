import {combineReducers} from 'redux';
import FilterData from './filte-data';
import MobileData from './mob-data' ; 
import { routerReducer } from 'react-router-redux'

let allReducers = combineReducers({
    filterData : FilterData , // Send Filter Data In Element To Store 
    mobileData : MobileData , // Send Mobile Data In Element To Store 
    routing    : routerReducer
});
export default allReducers;