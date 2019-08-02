import React from 'react';

class HumanResources extends React.Component{

    state = {
        flights: []
      }
    
    componentDidMount() {
      this.getFlights();
    }
    
    getFlights = _ => {
      fetch('http://localhost:4000/flights')
        .then(response => response.json())
        .then(response => this.setState({ flights: response.data}))
        .catch(err => console.error(err));
    }
    
      renderFlights(data) {
        const flights = [];
    
        data.forEach((flight) => {
          flights.push(
            <div key={flight.FLNO}>Flno: {flight.FLNO} From: {flight.ORIGIN} To: {flight.DESTINATION}</div>
          );
        });
    
        return (
          <div className="flights-container">
            {flights}
          </div>
        );
    
      }

    
    render(){
        const data = this.state.flights;
        return(
            <div>
                <p>Human Resources!</p>
                <ul>
                    <li>View All Staff</li> {/* Link to Table */}
                    <li>View Internal Staff</li>  {/* Link to Table */}
                    <li>View External Staff</li>  {/* Link to Table */}
                    <li>Pay Staff</li>  {/* component */}
                    <li>Salary History</li>  {/* Link to Table */}
                </ul>
                {this.renderFlights(data)}
            </div>
            );
    }
    
}

export default HumanResources;