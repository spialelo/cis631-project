import React from 'react';
import PropTypes from 'prop-types';


class UpdateTable extends React.Component{

    constructor() {
        super();
        this.state = {
            headers: ['employee_id', 'first name', 'last name']
        };

    }
    
    componentWillMount() {
        // use prop types and look at pathname so we can use this
        const path = this.props.location.pathname.split('/')[1];
        this.setState({ path });
    }

    componentDidMount() {
        this.getObjects();
      }
    
    getObjects = _ => {
        if(!this.state.path) {
            return;
        }

        const url = 'http://localhost:9000/'+this.state.path;

        fetch(url)
            .then(response => response.json())
            .then(response => this.setState({ data: response.data}, this.renderTable()))
            .catch(err => console.error(err));
    }

    renderTable() {
        if(!this.state.data) {
            return;
        }
        //then go through data and print
    }

    render(){
        const path = this.state.path ? this.state.path : undefined;
        return(
            <div>
                <p>{`View for ${path}!`}</p>
            </div>
            );
    }
    
}

UpdateTable.propTypes = {
    headers: PropTypes.array,
    location: PropTypes.object
};

export default UpdateTable;