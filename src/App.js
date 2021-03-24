import React, { Component } from 'react'
import './App.css';
import EmployeeDetails from './Components/employeeDetails/employeesDetails'
import Modal from './UI/Modal/Modal'
import Form from './UI/Form/Form'


class App extends Component {
  state = {
    createUser : false
  }
      
   createUserHandler = () => {
    this.setState({createUser : true})
  }
  cancelUserHandler = () => {
    this.setState({createUser : false})
  }

  render() {
    return (

      <div className="App">
      <button className="btn btn-primary" onClick={this.createUserHandler}>Add New Employee</button>
      <Modal show={this.state.createUser} clicked={this.cancelUserHandler}>
         <Form cancel = {this.cancelUserHandler} />
      </Modal>  
      <h1>Employee Details Page</h1>

        <EmployeeDetails />
        
      </div>
    )
  }
}


export default App;
