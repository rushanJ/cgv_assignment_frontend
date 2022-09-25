import { useState, useEffect } from 'react';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const App = () => {
   const [posts, setPosts] = useState([]);

   useEffect(() => {
      fetch('http://localhost:8000/api/file/modules')
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            setPosts(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

   return (
      <>
        
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
        <div className="d-grid gap-3">.
        {posts.map((module) => {
               return (
                <Link className="nav-link" to={"/dates?module="+module}>
                  <Button variant="secondary" size="lg" className="w-100">
                    {module}
                  </Button>
              </Link>
               );
            })}
         
        </div>

        
      </div>
    </div>
      </>
   );
};

export default App;