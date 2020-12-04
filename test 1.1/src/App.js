import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Route,BrowserRouter as Router,Switch,Link} from "react-router-dom"
import home from "./Home";
import about from "./About";
import worker from "./Worker"
import Login from "./login"

export default function app() {
  
  return (
  
<Router>
    
       <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        
  <a class="navbar-brand" href="#">hashmali</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
      <Link to="/" class="nav-link" >Home <span class="sr-only">(current)</span></Link>
      </li>
      
      <li class="nav-item">
      <Link to="/about" class="nav-link" >about</Link>
      </li>
      <li class="nav-item">
      <Link to="/worker" class="nav-link" >worker</Link>
      </li>
      <li class="nav-item">
      <Link to="/login" class="nav-link" >Login</Link>
      </li>
    </ul>
  </div>

</nav>

    <Switch>
      <Route>
        <Route path="/"exact component={home}/>
        <Route path="/worker" component={worker}/>
        <Route path="/about" component={about}/>
        <Route path="/login" component={Login}/>
        
      </Route>
    </Switch>
    </Router>
  );
}
