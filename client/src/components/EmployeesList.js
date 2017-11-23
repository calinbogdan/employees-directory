import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';

import Employee from './Employee';

class EmployeesList extends React.Component {

    handleDelete(employeeId) {
        
    }

    handleEdit(employeeId) {

    }

    render() {
        return (
            <Table striped hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th></th>
                        <th></th>                         
                    </tr>
                </thead>
                <tbody>
                    {this.props.employees.map((employee, index)=> {
                        return <Employee id={employee.id}
                                    name={employee.name}
                                    email={employee.email}
                                    onEdit={this.handleEdit}
                                    onDelete={this.handleDelete}/>
                    })}
                </tbody>
            </Table>
        );
    }
}

EmployeesList.propTypes = {
    employees: PropTypes.array.isRequired
}

export default EmployeesList;