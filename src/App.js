import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from './Components/Navbar'
import ExerciseList from './Components/ExerciseList'
import EditExercise from './Components/EditExercise'
import CreateExercise from './Components/CreateExercise'
import CreateUser from './Components/CreateUser'

function App() {
  return (

    <Router>
      <div className='container'>
        <Navbar />
        <br />
        <Routes>
          <Route path="/" exact element = {<ExerciseList />} />
          <Route path="/edit/:id" exact element = {<EditExercise />} />
          <Route path="/create" exact element = {<CreateExercise />} />
          <Route path="/user" exact element = {<CreateUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
