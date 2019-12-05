import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from './App';
import * as serviceWorker from './serviceWorker';
import './i18n';
import { createStore } from "redux";
import { Provider } from "react-redux";
//import reducer from "./Header";

//const mystore = createStore(reducer);

ReactDOM.render(
	
          <Suspense fallback={(<div>Loading</div>)}>
          
        <App />
        
    </Suspense>
    
          
        , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();




