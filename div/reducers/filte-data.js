const FilterData = (state=null, action) => {
    switch(action.type){
        case 'GET_DATA_FILTER':
        return action.dataFilter;
        break;
    }
    return state;
}
export default FilterData;