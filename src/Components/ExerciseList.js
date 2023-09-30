import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Exercise(props) {
  return (
    <tr>
      <td>{props.exercise.username}</td>
      <td>{props.exercise.description}</td>
      <td>{props.exercise.duration}</td>
      <td>{props.exercise.date.substring(0, 10)}</td>
      <td>
        <Link to={`/edit/${props.exercise._id}`} style={{textDecoration:"none",color:"darkgreen"}}>Edit</Link> |{' '}
        <a href="#" onClick={() => props.deleteExercise(props.exercise._id)}  style={{textDecoration:"none",color:"red"}}>delete</a>
      </td>
    </tr>
  );
}

function ExerciseList() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/exercises/')
      .then(response => {
        setExercises(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const deleteExercise = (id) => {
    axios.delete(`http://localhost:5000/exercises/${id}`)
      .then(response => {
        console.log(response.data);
        setExercises(prevExercises => prevExercises.filter(exercise => exercise._id !== id));
      })
      .catch(error => {
        console.log(error);
      });
  };

  const exerciseList = exercises.map(currentExercise => (
    <Exercise exercise={currentExercise} deleteExercise={deleteExercise} key={currentExercise._id} />
  ));

  return (
    <div>
      <h3>Logged Exercises</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{exerciseList}</tbody>
      </table>
    </div>
  );
}

export default ExerciseList;
