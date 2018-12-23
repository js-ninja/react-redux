import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
    createStore
} from 'redux';
import {
    BrowserRouter
} from 'react-router-dom'

import FormsData from './reducers/FormsData';
//initial state
const initialState = {
    fname: '',
    lname: '',
    emailid: '',
    gender: 'male'
};
//initialise store
const store = createStore(FormsData, initialState);
const render = () => ReactDOM.render( 
<BrowserRouter>
<App store={store} />
</BrowserRouter> , document.getElementById('root'));

render();
store.subscribe(render);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();