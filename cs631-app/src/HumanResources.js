import React from 'react';
import { Link, Route } from "react-router-dom";
import ViewTable from './ViewTable';

class HumanResources extends React.Component{

    state = {
        flights: []
      }
    
    componentDidMount() {
      // this.getFlights();
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
            <li><Link to="/teaches">Teaches</Link></li>
          </ul>
          <div>
            <Route path="/instructors" component={ViewTable} />
            <Route path="/employees" component={ViewTable} />
            <Route path="/contractors" component={ViewTable} />
            <Route path="/classes" component={ViewTable} />
            <Route path="/teaches" component={ViewTable} />
          </div>
        </div>
      );
    }
    
    render(){
        return(
            <div>
                <p>&raquo;&nbsp;Human Resources&nbsp;&laquo;</p>
                {this.renderNavigationLinks()}
            </div>
            );
    }
    
}

export default HumanResources;