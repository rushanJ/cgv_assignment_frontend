import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import DashboardHeader from "../components/DashboardHeader";
import * as rb from "react-bootstrap";
import { useState, useEffect } from 'react';


import "./styles.css";

const Dates = () => {
  const data = [{ name: "Date 1" }, { name: "Date 2" }];
  const queryString = window.location.search;
  const parameters = new URLSearchParams(queryString);
  const module = parameters.get('module');
  console.log(module);
  const [posts, setPosts] = useState([]);
  const [attendence, setAttendence] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/api/file/dates')
       .then((res) => res.json())
       .then((data) => {
          console.log(data);
          setPosts(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);

 useEffect(() => {
  fetch('http://localhost:8000/api/attendence/')
     .then((res) => res.json())
     .then((data) => {
        console.log(data);
        setAttendence(data);
     })
     .catch((err) => {
        console.log(err.message);
     });
}, []);


  return (
    <div className="dashboard-content">
      <div className="dashbord-header-container">
        <Link className="nav-link" to="/">
          <Button variant="secondary" size="md">
            Back
          </Button>
        </Link>
        <div className="dashbord-header-right"></div>
      </div>

      <div className="dashboard-content-container">
        <div className="dashboard-content-header">
          <h2>Dates</h2>
        </div>
        <div>
          <div>
            {posts.map(function (d, idx) {
              return <li key={idx}><Link to={"/attendance?module="+module+"&date="+d}>{d}</Link></li>;
            })}
          </div>
        </div>
        <rb.Table className="table table-hover table-bordered" responsive>
          <thead>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Module ID</th>
            <th>Module Name</th>
            <th>Date</th>
            <th>Attendance</th>
          </thead>

          <tbody>
          {attendence.map((data) => {

               return (
                
                  <tr className="post-card" key={data.id}>
                    <>
                      <td>
                        <span>{data.userId}</span>
                      </td>
                      <td>
                        <span>{data.name}</span>
                      </td>
                      <td>
                        <span>{data.moduleCode}</span>
                      </td>
                      <td>
                        <span>{data.moduleName}</span>
                      </td>
                      <td>
                        <span>{data.date}</span>
                      </td>
                      <td>
                        <span>{((data.attendence) ? 'Present' : 'Absent')}</span>
                      </td>
                    </>
                     
                  </tr>
               );
            })}
            
          </tbody>
        </rb.Table>
      </div>
    </div>
  );
};

export default Dates;
