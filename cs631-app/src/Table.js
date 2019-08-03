import React from 'react';
import PropTypes from 'prop-types';

class Table extends React.Component{
    constructor() {
        super();
        this.state = {
            flight: {
                flno: ''
            }
        };
    }

    render() {
        return(
            <table>
                <th><td></td></th>
                <tr>
                    <td></td>
                </tr>
            </table>
        );
    }
}

Table.propTypes = {
    headers: PropTypes.array
  };

export default Table;
