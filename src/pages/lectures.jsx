import Button from "react-bootstrap/Button";
import DashboardHeader from "../components/DashboardHeader";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import "./styles.css";

const Lectures = () => {
  return (
    <div className="dashboard-content">
      
      <div className="dashbord-header-container">
        <Link className="nav-link" to="/upload">
          <Button variant="primary" size="md">
            Upload File
          </Button>
        </Link>
        <div className="dashbord-header-right"></div>
      </div>
      <div className="dashboard-content-container">
        <div className="dashboard-content-header">
          <h2>Lectures</h2>
        </div>
        <div className="d-grid gap-3">
          <Link className="nav-link" to="/dates">
            <Button variant="secondary" size="lg" className="w-100">
              CGV
            </Button>
          </Link>
          <Link className="nav-link" to="/dates">
            <Button variant="secondary" size="lg" className="w-100">
              ABS
            </Button>
          </Link>
        </div>

        
      </div>
    </div>
  );
};

export default Lectures;
