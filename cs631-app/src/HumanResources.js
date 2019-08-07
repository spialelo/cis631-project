import React from 'react';
import { Link, Route } from "react-router-dom";
import ViewTable from './ViewTable';

class HumanResources extends React.Component{

    state = {
        flights: []
      }
    
    componentDidMount() {
      this.getFlights();
    }
    
    getFlights = _ => {
      fetch('http://localhost:9000/employees')
        .then(response => response.json())
        .then(response => this.setState({ flights: response.data}))
        .catch(err => console.error(err));
    }
    
    renderNavigationLinks() {
      return (
        <div>
          <ul>
            <li><Link to="/employees">Employees</Link></li>
            <li><Link to="/instructors">Instructors</Link></li>
            <li><Link to="/contractors">Contractors</Link></li>
            <li><Link to="/exercises">Exercises</Link></li>
            <li><Link to="/classes">Classes</Link></li>
            <li><Link to="/teaches">Teaches Class</Link></li>
          </ul>
          <div>
            <Route path="/instructors" component={ViewTable} />
            <Route path="/employees" component={ViewTable} />
            <Route path="/contractors" component={ViewTable} />
            <Route path="/classes" component={ViewTable} />
            <Route path="/rooms" component={ViewTable} />
            <Route path="/exercises" component={ViewTable} />
            <Route path="/members" component={ViewTable} />
            <Route path="/memberships" component={ViewTable} />
            <Route path="/registered" component={ViewTable} />
            <Route path="/teaches" component={ViewTable} />
            <Route path="/registerclass" component={ViewTable} />
            
            
            {/* <Route path="/memberships" component={ViewTable} />
            <Route path="/register-class" component={ViewTable} /> */}
            
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
    
    render(){
        const data = this.state.flights;
        return(
            <div>
                <p>Human Resources!</p>
                <ul>
                    <li>Pay Staff</li>  {/* component */}
                    <li>Salary History</li>  {/* Link to Table - need query*/}
                </ul>
                {data && <p>there's data</p>}
                {this.renderNavigationLinks()}
            </div>
            );
    }
    
}

export default HumanResources;