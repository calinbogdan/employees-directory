import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';
import styles from './css/Employee.css';

class Employee extends React.Component {

    render() {
        return(
            <tr>
                <th scope="row">{this.props.id}</th>  
                <td>{this.props.name}</td> 
                <td>{this.props.email}</td>
                <td><span className={styles.clickable} onClick={() => this.props.onEdit(this.props.id)}>Edit</span></td>
                <td><span className={styles.clickable} onClick={() => this.props.onDelete(this.props.id)}>Delete</span></td>
            </tr>
        )
    }
}

Employee.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default Employee;