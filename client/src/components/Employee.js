import React from 'react';
import PropTypes from 'prop-types';

class Employee extends React.Component {
    render() {
        return(
            <div>
                <span>#{this.props.id}</span> | 
                <span>{this.props.name}</span> | 
                <span>{this.props.email}</span>
                <button>Edit</button>
                <button>Delete</button> 
            </div>
        )
    }
}

Employee.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
}

export default Employee;