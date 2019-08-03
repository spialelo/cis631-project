import React from 'react';
import PropTypes from 'prop-types';
import Table from './Table';

class Members extends React.Component{

    constructor() {
        super();
        this.state = {
            headers: ['memid', 'first name', 'last name']
        };

    }
    
    componentDidMount() {
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
                <p>Members!</p>
                <Table headers={this.state.headers}/>
            </div>
            );
    }
    
}

export default Members;