import React, { useEffect, useState } from 'react'
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function CreateExercise() {
 const[username,setUsername] = useState('');
 const [description, setDescription] = useState('')
 const[duration,setDuration] = useState(0);
 const[date,setDate] = useState(new Date());
 const[users,setUsers] = useState([]);

 useEffect(()=>{
    axios.get('http://localhost:5000/users/')
    .then(response =>{
        if(response.data.length > 0)
        {
            setUsers(response.data.map(user => user.username))
            setUsername("test user")
        }
    })
    .catch(error => {
        console.log(error);
    });

 },[])

 function onSubmit (e)
 {
    e.preventDefault();
    const exercise = {
        username:username,
        description:description,
        duration:duration,
        date:date
    }
    console.log(exercise)

    axios.post('http://localhost:5000/exercises/add',exercise)
        .then(res => console.log(res.data))

    window.location = '/';
 }

  return (
    <div>
       <h3>Create new Exercise</h3>
       <form onSubmit={onSubmit}>
         <div className='form-group'>
                <label >Username</label>
                <select
                required
                className='form-control'
                value={username}   
                onChange={(e)=>setUsername(e.target.value)}>
                    {
                        users.map(user => (
                            <option key={user} value={user}>
                                {user}
                            </option>
                        ))
                    }
                </select>
            </div>
            <div className='form-group'>
                <label >Description</label>
                <input 
                    type="text"
                    required
                    className='form-control'
                    value={description}   
                    onChange={(e)=>setDescription(e.target.value)}    
                />    
            </div>
            <div className='form-group'>
                <label >Duration(in minutes)</label>
                <input 
                    type="text"
                    required
                    className='form-control'
                    value={duration}   
                    onChange={(e)=>setDuration(e.target.value)}    
                />    
            </div>
            <div className='form-group' style={{marginTop:"15px",display:"flex",flexDirection:"column" }}>
                <label style={{marginBottom:"10px"}}>Date:</label>
                <DatePicker
                    selected={date}   
                    onChange={(date)=>setDate(date)} 
                    style={{borderRadius:"5px"}}   
                />    
            </div>

            <div className='form-group'>
                <input type="submit" name="" value="Create Exercise Log" className='btn btn-primary' style={{marginTop:"15px"}}/>
            </div>
  
       </form>
    </div>
  )
}

export default CreateExercise
