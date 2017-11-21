import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';

class Employee extends React.Component {
    render() {
        return(
            <tr>
                <td>{this.props.id}</td>  
                <td>{this.props.name}</td> 
                <td>{this.props.email}</td>
                <td><Button>Edit</Button></td>
                <td><Button>Delete</Button> </td>
            </tr>
        )
    }
}

Employee.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
}

export default Employee;