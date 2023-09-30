import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav className='navbar navbar-dark bg-dark navbar-expand-lg '>
        <Link to="/" className='navbar-brand' style={{marginLeft:"15px"}}>TrackYourExercise</Link>
        <div className='collapse navbar-collapse'>
            <ul className='navbar-nav mr-auto'>
                <li className='navbar-item'>
                    <Link to="/" className='nav-link'>Exercises</Link>
                </li>
                <li className='navbar-item'>
                    <Link to="/create" className='nav-link'>ExerciseLog</Link>
                </li>
                <li className='navbar-item'>
                    <Link to="/user" className='nav-link'>CreateUser</Link>
                </li>
                
            </ul>
        </div>
      
    </nav>
  )
}

export default Navbar
