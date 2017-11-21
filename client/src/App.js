import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      employees: [],
      employee: {
        name: null,
        email: null
      }
    }
  }
  componentWillMount() {
    this.getEmployeesAsync();
  }

  async getEmployeesAsync() {
    fetch('http://localhost:5000/employees/')
    .then(response => response.json())
    .then(responseJson => {
      this.setState({
        employees: responseJson
      });
    });
  }

  handleNameChange(e) {
    this.setState({
      employee: {
        name: e.target.value,
        email: this.state.employee.email
      }
    });
  }

  handleEmailChange(e) {
    this.setState({
      employee: {
        name: this.state.employee.name,
        email: e.target.value
      }      
    })
  }

  handleFormSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:5000/employees/create', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.employee.name,
        email: this.state.employee.email
      })
    })
    .then(response => response.json())
    .then(responseJson => {
      console.log(responseJson);
    })

    this.getEmployeesAsync();
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.employees.map(employee => {
            return <li>{employee.name} - {employee.email}</li>
          })}
        </ul>
        <form onSubmit={e => this.handleFormSubmit(e)}>
          <input type="text" onChange={e => this.handleNameChange(e)}/>
          <input type="text" onChange={e => this.handleEmailChange(e)}/>
          
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
}

export default App;
