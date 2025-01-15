import { Link, Outlet } from "react-router-dom";
import "./AdminDashboard.css";
// import logoImage from "../assets/logo.png";
const AdminDashboard = () => {
  return (
    <div className="container-admin-dashboard">
      <aside className="sidebar-admin-dashboard">
        <div className="logo-admin-dashboard">
          <img className="logo-image-admin-dashboard" />
          <h2>YSYNC</h2>
        </div>
        <nav className="menu-admin-dashboard">
          <div className="menu-container-admin-dashboard">
            <Link to="acc-info">Account Information</Link>
          </div>
          <div className="menu-container-admin-dashboard">
            <Link to="requests">Requests</Link>
          </div>
          <div className="menu-container-admin-dashboard">
            <Link to="reports">Reports</Link>
          </div>
        </nav>
        <div class="admin-account">
          <p>ADMIN ACCOUNT</p>
        </div>
      </aside>

        
      {/* Add your admin dashboard content here */}
      <Outlet />
    </div>
  );
};

export default AdminDashboard;
