
import React from  'react'
import Employee from '../../Container/Employee'



const employeesDetails = React.memo(() =>{
    
        return (
        <div>
   
          <table className="table">
              <thead>
                  <tr>
                      <th >
                          Employee Name
                      </th>
                      <th >
                          Role
                      </th>
                      <th >
                          Location
                      </th>
                      <th>
                         Active
                      </th>
                  </tr>
              </thead>
             <Employee/>
          </table>
        </div>
        )
    
})

export default employeesDetails
