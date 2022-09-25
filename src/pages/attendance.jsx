import Button from "react-bootstrap/Button";
import DashboardHeader from "../components/DashboardHeader";
import Form from "react-bootstrap/Form";
import * as rb from "react-bootstrap";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import pie from "../assets/images/pie-chart.png";
import sig from "../assets/images/signature.jpeg";
import "./styles.css";
import { App } from './chart';


import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";


import { useState, useEffect } from 'react';


const Attendance = () => {

  const data = [{ name: "Date 1" }, { name: "Date 2" }];
  const queryString = window.location.search;
  const parameters = new URLSearchParams(queryString);
  const module = parameters.get('module');
  const date = parameters.get('date');
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
  fetch('http://localhost:8000/api/attendence/?moduleName='+module+'&date='+date)
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
      {/* <DashboardHeader btnText="New Order" /> */}

      <div className="dashbord-header-container">
        <Link className="nav-link" to="/dates">
          <Button variant="secondary" size="md">
            Back
          </Button>
        </Link>
        <div className="dashbord-header-right"></div>
      </div>
      <Row>
        <Col className="pr-0 mr-0" lg="8" xl="8" >
          <div className="dashboard-content-container">
            <div className="dashboard-content-header">
              <h2>Attendance</h2>
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

            {/* <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Filling Station Name</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Filling Station Name</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Fuel type needed</Form.Label>

            <Form.Select aria-label="Default select example">
              <option disabled selected>Choose Type</option>
              <option value="1">Petrol 92</option>
              <option value="2">Petrol 95</option>
              <option value="3">Diesel</option>
              <option value="4">Super Diesel</option>

            </Form.Select>
            
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Volume needed</Form.Label>
            <Form.Control type="text" placeholder="in Liters" />
          </Form.Group>

          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form> */}
          </div>
        </Col>
        <Col  lg="4" xl="4">
          <Col className="pl-0 ml-0" lg="12" xl="12">
            <div className="dashboard-content-container">
              <img src={pie} alt="logo" />
            </div>
          </Col>
          <Col className="pl-0 ml-0" lg="12" xl="12">
            <div className="dashboard-content-container">
              <img src={sig} alt="logo" className="img-fluid"/>
            </div>
          </Col>
        </Col>
      </Row>
    </div>
  );
};

export default Attendance;
