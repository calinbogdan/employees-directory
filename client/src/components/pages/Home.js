import React from 'react';

import Employee from './../Employee';

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
                <ul>
                    {this.state.employees.map((employee, index) => {
                        return (
                        <li key={index}>
                            <Employee id={employee.id}
                                name={employee.name}
                                email={employee.email}/>
                        </li>);
                    })}
                </ul>
            </div>
        )
    }
}