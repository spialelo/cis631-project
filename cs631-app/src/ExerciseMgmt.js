import React from 'react';
import { Link, Route } from "react-router-dom";
import ViewTable from './ViewTable';

class ExerciseMgmt extends React.Component{

    constructor() {
        super();
        this.state = {
            flight: {
                flno: ''
            }
        };

        this.addExerciseClass = this.addExerciseClass.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    
    componentDidMount() {
        // IN WILL MOUNT GET PATH, THEN SWITCH RENDER AND FETCH CALL APPROPRIATELY
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
              <li><Link to="/instructors">Instructors</Link></li>
              <li><Link to="/exercises">Exercises</Link></li>
              <li><Link to="/classes">Classes</Link></li>
              <li><Link to="/teaches">Teaches Class</Link></li>
              <li><Link to="/rooms">Rooms</Link></li>
              <li><Link to="/registered">Registered</Link></li>
              <li><Link to="/registerclass">Register for Class</Link></li>
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
            
              
              {/* Could use one component for Register for class/assign instructor. use pathname
              to render correct divs and onSubmit calls. Maybe squeeze in the Pay? */}
            </div>
          </div>
        );
      }

    onChange(e) {
        this.setState({ flight: Object.assign({}, this.state.flight, {flno: e.target.value})});
    }
    
    addExerciseClass = _ => {
      fetch('http://localhost:4000/flights?add=')
        .then(response => response.json())
        .then(response => this.setState({ flights: response.data}))
        .catch(err => console.error(err));
    }
    
    render(){
        return(
            <div>
                <p>Exercise Management!</p>
                {this.renderNavigationLinks()}
                <ul>
                    <li>Internal</li> {/* add Classes(component), scheduled class(component), assign instructor(component) */}
                    <li>External</li> {/* register for class (component) - needs constraint but works*/}
                </ul>
                <input
                    value={this.state.flight.flno}
                    onChange={this.onChange}/>
            </div>
            );
    }
    
}

export default ExerciseMgmt;