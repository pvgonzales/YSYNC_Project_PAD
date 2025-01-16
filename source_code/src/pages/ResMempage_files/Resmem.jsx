import React, { useState } from "react";
import "./Resmem.css";
import Table from "./Table.jsx";
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  

function ResMem() {
  const [type, setType] = useState("activeMem");
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <body>
        <div className="resmem-body">
      <div className="parentNav">
        <div className="logoname">
          <img src="" alt="YSES Logo" className="resmem-logo" />
          <div className="navi">YSYNC</div>
        </div>
        <ul className="navButtons">
          <li className="button"><a href="">Dashboard</a></li>
          <li className="button"><a href="">Mentors</a></li>
          <li className="navActive button"><a href="">Resident Members</a></li>
        </ul>
        <button
            onClick={() => {
                console.log("Dropdown visible before toggle:", dropdownVisible);
                setDropdownVisible(!dropdownVisible);
                console.log("Dropdown visible after toggle:", !dropdownVisible);
            }}
            className="profile-button"
            >
            <img src="./assets/profile.jpg" alt="profile pic" className="profile" />

        </button>
      </div>
      <div className={`acc-parentNav ${dropdownVisible ? "visible" : "hidden"}`}>
            <a href="#">Profile</a>
            <a href="#">Report</a>
            <a href="#">Defer</a>
            <a href="#">Log Out</a>
        </div>

      <Table/>
    </div>
    </body>
    
  );
}

export default ResMem;
