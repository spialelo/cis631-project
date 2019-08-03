import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route } from "react-router-dom";
import HumanResources from './HumanResources';
import ExerciseMgmt from './ExerciseMgmt';
import ViewTable from './ViewTable';

class App extends Component {

  renderNavigationLinks() {
    return (
      <div>
        <nav>
          <Link to="/human-resources">Human Resources</Link><br/>
          <Link to="/exercise-management">Exercise Management</Link>
        </nav>
        <div>
          <Route path="/human-resources" component={HumanResources} />
          <Route path="/exercise-management" component={ExerciseMgmt} />
          <Route path="/staff" component={ViewTable} />
          <Route path="/members" component={ViewTable} />
          <Route path="/instructors" component={ViewTable} />
          <Route path="/classes" component={ViewTable} />
          {/* Could use one component for Register for class/assign instructor. use pathname
          to render correct divs and onSubmit calls. Maybe squeeze in the Pay? */}
          {/*
          <Route path="/register-for-class" component={UpdateTable} />
          <Route path="/assign-instructor" component={UpdateTable} />
          <Route path="/pay-staff" component={UpdateTable} />
          */}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>CS631 Project - NJIT Fitness Center</p>
          {this.renderNavigationLinks()}
          <p>&nbsp;</p>
        </header>
      </div>
    );
  }
}

export default App;
