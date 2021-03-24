import React from 'react'
import './Form.css'



const  Form = (props) =>{
    return (
       <form className="Form">
           <input className="form-control" placeholder="Name" />
           <input className="form-control" placeholder="Role"  />
           <input className="form-control" placeholder="Location" />
           <input className="form-control" placeholder="status"/>
           <div>
               <button className="btn btn-warning" >Cancel</button>
               <button type="submit" className="btn btn-success" >Save</button>
           </div>
       </form>
    )
}



export default Form;
