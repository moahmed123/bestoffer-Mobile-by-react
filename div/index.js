import React from 'react';
import ReactDOM from 'react-dom';
// Container Redux => Provider 
import {Provider} from 'react-redux';
//Fun Create Store 
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
// Reducer Fun AllReducer content All Data For Site . 
import allReducers from './reducers';
// Main App ALL Site Nav, Header, Filter, Data, Footer
import App from './components/App';
// Component About .
import About from './components/About';

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

let store = createStore(allReducers, applyMiddleware(thunk,promise));

ReactDOM.render(    
    <Provider store={store}>
        <Router>
            {/* <div> */}
            <Switch>                
                <Route exact path='/' component={App} />                                                                                                                 
                <Route exact path='/about' component={About} /> 
            </Switch>
            {/* </div> */}
        </Router>  
  </Provider>,
    document.getElementById('root'));


