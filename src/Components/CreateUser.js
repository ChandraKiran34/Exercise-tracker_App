import React, { useState } from 'react'
import axios from 'axios'

function CreateUser() {
    const[username,setUsername] = useState('');
    const onSubmitHandler = (e) =>{
        e.preventDefault();
        const user = {
            username:username
        }
        console.log(user)
        axios.post('http://localhost:5000/users/add',user)
        .then(res=>console.log(res.data))

        setUsername('')
    }
    return (
    <div>
       <h3>Create new User</h3>
       <form onSubmit={onSubmitHandler}>
        <div className='form-group'>
            <label >Username:</label>   
            <input type="text" required className='form-control' value={username} onChange={(e)=>setUsername(e.target.value)} />         
        </div>
        <div className="form-group">
          <input type="submit" value="Create User" className="btn btn-primary"  style={{marginTop:"15px"}}/>
        </div>
       </form>
    </div>
  )
}

export default CreateUser
