
import React, { useState } from 'react'
import { TrashFill } from 'react-bootstrap-icons';
import Modal from '../UI/Modal/Modal'
import Form from '../UI/Form/Form'
import { connect } from 'react-redux'

const Employee =React.memo((props) => {

  const [editEmployee, setEditEmployee] = useState(false)

  const cancelHandler = () => {
    setEditEmployee({editEmployee : false})
  }
  const createHandler = () => {
    setEditEmployee({editEmployee : true})
  }

    return (
            <React.Fragment>
              <Modal show= {editEmployee} clicked={cancelHandler}>
                <Form cancel={cancelHandler} />
              </Modal>
                 <tbody>
                     <tr>
                        <th >
                          {props.name}
                        </th>
                        <th >
                          {props.position}
                        </th>
                        <th >
                          {props.location}
                        </th>
                        <th>
                          {props.status}
                        </th>
                        <th>
                       {(props.buttonStatus) &&  <button className="btn" onClick={createHandler}>Edit Employee</button>}
                        </th>
                        <th>
                           {(props.deleteStatus) && <TrashFill/>}
                        </th>
                    </tr>
                </tbody>
               
        </React.Fragment>
    )
})
const mapStateToProps  = state => {
  return {
     name: state.employee.name,
     position: state.employee.role,
     location : state.employee.location,
     status : state.employee.status,
     buttonStatus : state.employee.buttonStatus,
     deleteStatus : state.employee.deleteStatus
  };
}



export default connect(mapStateToProps)(Employee);
