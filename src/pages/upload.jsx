import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import DashboardHeader from "../components/DashboardHeader";
import * as rb from "react-bootstrap";

import "./styles.css";

const Upload = () => {
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
          <h2>Upload</h2>
        </div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Module Code</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Module Name</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Date</Form.Label>
            <Form.Control type="text" placeholder="" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" name="file" />
          </Form.Group>

          <Button variant="success" type="submit">
            Upload
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Upload;
