import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,BrowserRouter, Switch} from 'react-router-dom'
/*import Form from './Component/Form';*/
import Login  from './Component/Login';
import FetchData from './Component/FetchData';
import Create from './Component/Create';
import Update from './Component/Update';

import Signup  from './Component/Signup';
// import Header from './Component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mainpage from './Component/Mainpage';

export const API_URL = "http://localhost:8000/api/blog/";
function Router(){
  return(
      <BrowserRouter>
      <div>
      
      <Switch>
      <Route exact path = '/' component = {Mainpage}/>
      <Route path = '/login' component = {Login}/>
      <Route path ='/Signup' component={Signup} />
      <Route path = '/App' component = {App}/>  
      <Route path ='/All Blogs' component={FetchData} />
      <Route path ='/Create' component={Create} />
      <Route path ='/Update/:id' component={Update} />
     
      </Switch>
      </div>
      </BrowserRouter>
      )
}

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
