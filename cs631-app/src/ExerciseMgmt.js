import React from 'react';
import { Link, Route } from "react-router-dom";
import ViewTable from './ViewTable';
import UpdateTable from './UpdateTable';

class ExerciseMgmt extends React.Component{

    constructor() {
        super();
        this.state = {
        };
    }

      renderNavigationLinks() {
        return (
          <div>
            <ul>
              <li><Link to="/instructors">Instructors</Link></li>
              <li><Link to="/exercises">Exercises</Link></li>
              <li><Link to="/classes">Classes</Link></li>
              <li><Link to="/add-class">Add Class</Link></li>
              <li><Link to="/add-exercise">Add Exercise</Link></li>
              <li><Link to="/teaches">Assigned Classes</Link></li>
              <li><Link to="/assign-to-class">Assign Instructor to Class</Link></li>
              <li><Link to="/rooms">Rooms</Link></li>
              <li><Link to="/members">Members</Link></li>
              <li><Link to="/registered">Registered</Link></li>
              <li><Link to="/register-for-class">Register for Class</Link></li>
            </ul>
            <div>
              <Route path="/instructors" component={ViewTable} />
              <Route path="/exercises" component={ViewTable} />
              <Route path="/classes" component={ViewTable} />
              <Route path="/teaches" component={ViewTable} />
              <Route path="/members" component={ViewTable} />
              <Route path="/add-class" component={UpdateTable} />
              <Route path="/add-exercise" component={UpdateTable} />
              <Route path="/assign-to-class" component={UpdateTable} />
              <Route path="/registered" component={ViewTable} />
              <Route path="/register-for-class" component={UpdateTable} /> 
              <Route path="/rooms" component={ViewTable} />
            </div>
          </div>
        );
      }
    
    render(){
        return(
            <div>
              <p>&raquo;&nbsp;Exercise Management&nbsp;&laquo;</p>
                {this.renderNavigationLinks()}
            </div>
            );
    }
    
}

export default ExerciseMgmt;