import DashboardHeader from "../components/DashboardHeader";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import * as rb from "react-bootstrap";

import "./styles.css";

const Dates = () => {
  const data = [{ name: "Date 1" }, { name: "Date 2" }];
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
            {data.map(function (d, idx) {
              return <li key={idx}>{d.name}</li>;
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
      </div>
    </div>
  );
};

export default Dates;
