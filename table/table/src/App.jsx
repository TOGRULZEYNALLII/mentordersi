import { useState,useEffect, use } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, } from "react-router-dom";
import PersonDetailWrapper from './PersonDetailWrapper'; // Assuming 
// you have a PersonDetailWrapper component
import { useNavigate } from "react-router-dom"; // ✅ doğru export budur

import React from 'react';
import './index.css'; // Assuming you have some styles in index.css
function HomePage () {
  const [melumat, setMelumat] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:3000/people' )
      .then(response => response.json())
      .then(data => setMelumat(data))
      .catch(error => console.error('Error fetching data:', error));

  },[]);
  const navigate = useNavigate();
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/people/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          setMelumat(melumat.filter(item => item.id !== id));
        } else {
          console.error('Error deleting item:', response.statusText);
        }
      })
      .catch(error => console.error('Error deleting item:', error));
  }
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Fullname</th>
            <th>Age</th>
            <th>Location</th>
            <th>salary</th>
          <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {melumat.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.surname}</td>
        
            <td>{item.age}</td>
            <td>{item.location}</td>
               <td>{item.salary}$</td>
               <td>
                 <div>
                   <button onClick={() => handleDelete(item.id)}>delete</button>
                   <Link to={`/person/${item.id}`}>
                     <button>About person</button>
                   </Link>
                 </div>
               </td>
          </tr>
          ))}
         
        </tbody>
      </table >
    </>
  );
}
function App() {
  return (
 <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/person/:id" element={<PersonDetailWrapper />} />
      </Routes>
    </Router>
  );
}


export default App;


