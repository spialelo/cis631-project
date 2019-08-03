import React from 'react';
import PropTypes from 'prop-types';
import Table from './Table';

const TABLE_HEADERS = {
    staff: ['employee_id', 'first name', 'last name'],
    'internal-staff': ['employee_id', 'first name', 'last name'],
    'external-staff': ['employee_id', 'first name', 'last name'],
    members: ['memid', 'first name', 'last name'],
    instructors: [],
    classes: []
};


class ViewTable extends React.Component{

    constructor() {
        super();
        this.state = {
            headers: ['employee_id', 'first name', 'last name']
        };

    }
    
    componentWillMount() {
        // use prop types and look at pathname so we can use this
        const path = this.props.location.pathname.split('/')[1];
        this.setState({ path }, this.getObjects());
    }
    
    getObjects = _ => {
        if(!this.state.path) {
            return;
        }

        fetch('http://localhost:4000/'+this.state.path)
            .then(response => response.json())
            .then(response => this.setState({ flights: response.data}))
            .catch(err => console.error(err));
    }

    render(){
        const path = this.state.path ? this.state.path : undefined;
        return(
            <div>
                <p>{`ViewTable (based on ${path})!`}</p>
                <Table headers={TABLE_HEADERS[path]}/>
            </div>
            );
    }
    
}

ViewTable.propTypes = {
    headers: PropTypes.array,
    location: PropTypes.object
};

export default ViewTable;