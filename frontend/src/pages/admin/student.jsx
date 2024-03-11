import { useState, useEffect } from 'react';
import axios from 'axios';
import '../../assets/css/student.css';
import Adminbar from './sidebar';

const Student = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchEvents();
  }, []);
  const token=localStorage.getItem('token');
  console.log(token);
  axios.defaults.headers.common['Authorization']=`Bearer ${token}`;
  
  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/user-application');
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  return (
    
    <div className="table-container">
         <div>
                <Adminbar/>
            </div><br></br><br></br>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Standard</th>
            <th>Parent Name</th>
            <th>Phone Number</th>
            <th>Location</th>
            <th>Venue</th>
            <th>Schedule</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.age}</td>
              <td>{student.standard}</td>
              <td>{student.parentName}</td>
              <td>{student.phoneNumber}</td>
              <td>{student.location}</td>
              <td>{student.venue}</td>
              <td>{student.schedule}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Student;
