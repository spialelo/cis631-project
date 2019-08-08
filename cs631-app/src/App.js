import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route } from "react-router-dom";
import HumanResources from './HumanResources';
import ExerciseMgmt from './ExerciseMgmt';
import UpdateTable from './UpdateTable';
import ViewTable from './ViewTable';

class App extends Component {

  renderNavigationLinks() {
    return (
      <div>
        <ul>
          <li><Link to="/human-resources">Human Resources</Link></li>
          <li><Link to="/exercise-management">Exercise Management</Link></li>
        </ul>
        <div>
          <Route path="/exercise-management" component={ExerciseMgmt} />
          <Route path="/human-resources" component={HumanResources} />
          <Route path="/add-class" component={UpdateTable} />
          <Route path="/assign-to-class" component={UpdateTable} />
          <Route path="/register-for-class" component={UpdateTable} />
          
          <Route path="/instructors" component={ViewTable} />
          <Route path="/employees" component={ViewTable} />
          <Route path="/contractors" component={ViewTable} />
          <Route path="/exercises" component={ViewTable} />
          <Route path="/classes" component={ViewTable} />
          <Route path="/teaches" component={ViewTable} />
          <Route path="/registered" component={ViewTable} />
          <Route path="/rooms" component={ViewTable} />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a href="/"><img src={logo} className="App-logo" alt="logo" /></a>
          <p>CS631 Project - NJIT Fitness Center</p>
          {this.renderNavigationLinks()}
          <p>&nbsp;</p>
        </header>
      </div>
    );
  }
}

export default App;
