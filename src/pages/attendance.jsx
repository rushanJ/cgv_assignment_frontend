import Button from "react-bootstrap/Button";
import DashboardHeader from "../components/DashboardHeader";
import Form from "react-bootstrap/Form";
import * as rb from "react-bootstrap";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import pie from "../assets/images/pie-chart.png";
import sig from "../assets/images/signature.jpeg";
import "./styles.css";

const Attendance = () => {
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
                <tr>
                  <td>
                    <span>test</span>
                  </td>
                  <td>
                    <span>test</span>
                  </td>
                  <td>
                    <span>test</span>
                  </td>
                  <td>
                    <span>test</span>
                  </td>
                  <td>
                    <span>test</span>
                  </td>
                  <td>
                    <span>test</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>test</span>
                  </td>
                  <td>
                    <span>test</span>
                  </td>
                  <td>
                    <span>test</span>
                  </td>
                  <td>
                    <span>test</span>
                  </td>
                  <td>
                    <span>test</span>
                  </td>
                  <td>
                    <span>test</span>
                  </td>
                </tr>
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
