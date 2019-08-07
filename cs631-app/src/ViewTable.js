import React from 'react';
import PropTypes from 'prop-types';


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


        const data = this.state.data;
        const main = [];
        const headers = [];
        headers.push(<td key="index">Index</td>);
        // use the keys as the headers
        Object.keys(data[0]).forEach((key) => {
            headers.push(<td key={key}><strong>{key}</strong></td>)
        });
        
        main.push(<tr key="headers">{headers}</tr>);
        
        data.forEach((row, index) => {
            const cells = [];
            cells.push(<td key="index">{index}</td>)
            Object.keys(data[index]).forEach((key, i) => {
            cells.push(<td key={i}>{data[index][key]}</td>);
            });

            main.push(
                <tr key={index}>
                    {cells}
                </tr>
            );
       
        });
        
        return main;

        //then go through data and print
    }

    render(){
        const path = this.state.path ? this.state.path : undefined;
        return(
            <div>
                <p>{`Table for ${path}!`}</p>
                <table>
                    <tbody>{this.renderTable()}</tbody>
                </table>
            </div>
            );
    }
    
}

ViewTable.propTypes = {
    headers: PropTypes.array,
    location: PropTypes.object
};

export default ViewTable;