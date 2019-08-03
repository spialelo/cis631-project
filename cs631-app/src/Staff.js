import React from 'react';
import PropTypes from 'prop-types';
import Table from './Table';

class Staff extends React.Component{

    constructor() {
        super();
        this.state = {
            headers: ['employee_id', 'first name', 'last name']
        };

    }
    
    componentWillMount() {
        // use prop types and look at pathname so we can use this
        // component for all 3 staff variations: all, internal, external
        this.getObjects();
    }
    
    getObjects = _ => {
        fetch('http://localhost:4000/flights')
            .then(response => response.json())
            .then(response => this.setState({ flights: response.data}))
            .catch(err => console.error(err));
    }

    render(){
        return(
            <div>
                <p>Staff!</p>
                <Table headers={this.state.headers}/>
            </div>
            );
    }
    
}

export default Staff;