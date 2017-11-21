import React from 'react';
import { Container } from 'reactstrap';

import EmployeesList from './../EmployeesList';

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            employees: []
        }
    }

    componentWillMount() {
        this.getEmployeesAsync();    
    }

    async getEmployeesAsync() {
        fetch('http://localhost:5000/employees/get')
        .then(response => response.json())
        .then(employees => {
            this.setState({
                employees: employees
            });
        })
        .catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                <Container>
                    <EmployeesList employees={this.state.employees}/>
                </Container>
            </div>
        )
    }
}