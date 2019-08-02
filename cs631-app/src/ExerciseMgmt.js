import React from 'react';

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
                <ul>
                    <li>Internal</li> {/* Link to page: View Classes(table), add Classes(component), scheduled class(component), view instructors(table), assign instructor(component) */}
                    <li>External</li> {/* Link to page: View classes(table/schedule), register for class (component) */}
                </ul>
                <input
                    value={this.state.flight.flno}
                    onChange={this.onChange}/>
            </div>
            );
    }
    
}

export default ExerciseMgmt;