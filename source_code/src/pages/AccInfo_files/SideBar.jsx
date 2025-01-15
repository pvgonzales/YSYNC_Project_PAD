import React from "react";// Assuming you have a CSS file for styling
import "./SideBar.css";
import logoImg from "./assets/logo.png";
import accountIcon from "./assets/Group_fill.png";
import requestsIcon from "./assets/Bell_pin.png";
import reportsIcon from "./assets/Flag.png";

function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Logo Section */}
      <div className="accinfo-logo">
        <a href="../acc-info/admin-acc-info.html">
          <img className="logo-img" src={logoImg} alt="YSYNC Logo" />
        </a>
        <h2>YSYNC</h2>
      </div>

      {/* Navigation Menu */}
      <nav className="menu">
        <div className="menu-container active">
          <img className="menu-img" src={accountIcon} alt="Account Information Icon" />
          <a href="../acc-info/admin-acc-info.html" className="menu-item">
            Account Information
          </a>
        </div>
        <div className="menu-container">
          <img className="menu-img" src={requestsIcon} alt="Requests Icon" />
          <a href="../requests/admin-requests.html" className="menu-item">
            Requests
          </a>
        </div>
        <div className="menu-container">
          <img className="menu-img" src={reportsIcon} alt="Reports Icon" />
          <a href="../reports/admin-reports.html" className="menu-item">
            Reports
          </a>
        </div>
      </nav>

      <div className="admin-account">
        <p>ADMIN ACCOUNT</p>
      </div>
    </aside>
  );
}

export default Sidebar;
