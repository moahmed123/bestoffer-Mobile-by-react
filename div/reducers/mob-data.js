const MobileData = (state = null, action) => {
    switch(action.type){
        case "GET_DATA_MOBILE":
        return action.dataMob;
        break;
    }
    return state ;
}
export default MobileData;