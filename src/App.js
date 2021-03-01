import React, { Component } from 'react';
import './App.css';

import { NavDropdown ,Nav} from 'react-bootstrap';
import { useHistory} from 'react-router-dom';
function App() {
  const history=useHistory();
  const user = JSON.parse(localStorage.getItem('user-info'));
  

function logout() {
    localStorage.clear();
    history.push('/')
  }
  return (
    <><br/>
    <div class ="a" back="https://images.pexels.com/photos/255379/pexels-photo-255379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500">
     <h1 class="mb-3">WEL COME TO  BLOG APPLICATION</h1><br/>
      <div className="demo">
      <nav className="navbar navbar-expand-lg navbar-light bg-info ">
      
        <div className="container-fluid" width="50">
          
          <a className="navbar-brand" href="#"></a>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <i className="fas fa-bars"></i>
          </button>
         
         
      <div className="collapse navbar-collapse" id="navbarNav">

            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link " href="/All Blogs">All Blogs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Create">Create</a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/Update">Update</a>
              </li> */}
               
              {/* <li className="nav-item">
                <a className="nav-link " href="/viewblogs">Viewblogs</a>
              </li> */}
             
            </ul>
          </div>
        </div>
      <div>
      
          <Nav title="Cancel">
              <NavDropdown.Item  onClick={logout}>LogOut </NavDropdown.Item>
          </Nav>
        </div>
      </nav>
      
      <br></br>
  </div>
  </div>
    </>
  );
}

export default App;
