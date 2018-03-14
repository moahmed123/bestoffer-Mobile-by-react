import fetch from 'node-fetch';
/*
    - All Api For Site Data [content Fun ]
        - GetDataFilter => To Get Data For Filter .
        - GetDataMobile => To Get Data For Mobile .

    - All Action For Site Data [content Fun ]
        - ActionDataFilter => To Send Filter Data For Reducer.
        - ActionDataMobile => To Send Mobile Data For Reducer.
*/
// Get Data Filter Function . 
export function GetDataFilter(){
    return(dispatch) => {
        return fetch('http://bestoffer2.herokuapp.com/api/filter')
        .then(res => res.json())
        .then((result) =>{
            console.log(result);
            dispatch(ActionDataFilter(result));
        });
    }
}
// Action To Send Data Filter For Reducer .
export function ActionDataFilter(DataFilter){
    return{
        type: 'GET_DATA_FILTER',
        dataFilter: DataFilter
    }
}
/**
 ** Get Data Mobile Function Use When Filter Change 
 ** Sort By Change And Scroll Page To Git Data 
 **/
export function GetDataMobile(Data){            
    const URL = "http://bestoffer2.herokuapp.com/api/products?"+Data;
    return (dispatch) => {        
        return fetch(URL)
        .then(res => res.json())
        .then((result)=>{                             
            dispatch(ActionDataMobile(result));
        });
    }
}
/**
 ** scrollData Function Use When Scroll Page
 **/
// export function scrollData(Data,oldData){            
//     const URL = "http://bestoffer2.herokuapp.com/api/products?"+Data;
//     return (dispatch) => {        
//         return fetch(URL)
//         .then(res => res.json())
//         .then((result)=>{                 
//             // const data = {results:oldData.concat(result)};
//             const data = {results : oldData.concat(result['results'])};
//             console.log('dgdg');
//             console.log(data);                   
//             dispatch(ActionDataMobile(data));
//         });
//     }
// }
export function ActionDataMobile(DataMobile){
    return{
        type: 'GET_DATA_MOBILE',
        dataMob: DataMobile
    }
}
/**
 ** Function Use When Change Filter , Pagination And Sort By . To Update Data .
 **/
export function onChangeFilter(lengthForInput,linkBrands,linkPrice,linkOperatSys,linkNameSite,x,y,offset){        
        // Loop To Select Input     
        for (let i = 0; i < lengthForInput; i++){
            let selectInputChaked = document.querySelector('#filter-form')[i].checked,
                selectInput       = document.querySelector('#filter-form')[i]; // Input     
            // Filter Only Brands . 
            if(selectInputChaked == true && selectInput.name == 'brands'){
                linkBrands = linkBrands + document.querySelector('#filter-form')[i].value + x;                            
            }                    
            // Filter Only price. selectInputChaked == true &&
            if(selectInput.name == 'price'){
                linkPrice = linkPrice + document.querySelector('#filter-form')[i].value + x; 
                console.log(linkPrice);                           
            }
            // Filter operatsystem
            if(selectInputChaked == true && selectInput.name == 'operatsys'){
                linkOperatSys = linkOperatSys + document.querySelector('#filter-form')[i].value + x; 
                console.log(linkOperatSys);                           
            }
            // Filter NameSite
            if(selectInputChaked == true && selectInput.name == 'site-name'){
                linkNameSite = linkNameSite + document.querySelector('#filter-form')[i].value + x; 
                console.log(linkNameSite);                           
            }
        }        
        // Select Value For Sortby                                                          
        let valSortBy = document.getElementById('sort-by-value').value;
        console.log(linkBrands);
        //Create Link Filter To Send To Api . 
        let FilterUrl = 'brands=' + linkBrands + '&prices=' + linkPrice + '&offset=' + offset,
            FinalUrl  = FilterUrl + '&os=' + linkOperatSys + '&sites=' + linkNameSite + '&sort=price&order=' + valSortBy;            
        console.log(FinalUrl); 
        console.log('mohamedFitch');
        const URL = "http://bestoffer2.herokuapp.com/api/products?" + FinalUrl;
        return (dispatch) => {        
            return fetch(URL)
            .then(res => res.json())
            .then((result)=>{                             
                dispatch(ActionDataMobile(result));
                console.log(result);
            });
        }
         
}   