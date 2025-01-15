import React, { useState } from "react";
import "./Resmem.css";
import Table from "./Table.jsx";

const dataMap = {
  activeMem: [
    { name: "John Doe", email: "jdoe@up.edu.ph", batch: 2023, orgbatch: "NA", additionalInfo: "⋮" },
    { name: "Ada Lovelace", email: "alovelace@up.edu.ph", batch: 1999, orgbatch: "NA", additionalInfo: "⋮" },
    { name: "George Bool", email: "gboole@up.edu.ph", batch: 2022, orgbatch: "NA", additionalInfo: "⋮" },
    { name: "Bill Gates", email: "bgates@up.edu.ph", batch: 2010, orgbatch: "NA", additionalInfo: "⋮" },
  ],
  inactiveMem: [
    { name: "John Doe", email: "jdoe@up.edu.ph", batch: 2023, orgbatch: "System7", additionalInfo: "⋮" },
    { name: "Ada Lovelace", email: "alovelace@up.edu.ph", batch: 1999, orgbatch: "nightMode", additionalInfo: "⋮" },
    { name: "George Bool", email: "gboole@up.edu.ph", batch: 2022, orgbatch: "Reboot", additionalInfo: "⋮" },
    { name: "Bill Gates", email: "bgates@up.edu.ph", batch: 2010, orgbatch: "Batch from Home", additionalInfo: "⋮" },
  ],
  alumni: [
    { name: "John Doe", email: "jdoe@up.edu.ph", batch: 2023, orgbatch: "Charter", additionalInfo: "⋮" },
    { name: "Ada Lovelace", email: "alovelace@up.edu.ph", batch: 1999, orgbatch: "nightMode", additionalInfo: "⋮" },
    { name: "George Bool", email: "gboole@up.edu.ph", batch: 2022, orgbatch: "Reboot", additionalInfo: "⋮" },
    { name: "Bill Gates", email: "bgates@up.edu.ph", batch: 2010, orgbatch: "Batch from Home", additionalInfo: "⋮" },
  ],
};
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  

function ResMem() {
  const [type, setType] = useState("activeMem");
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const filteredData = dataMap[type].filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          <li className="button"><a href="">Connect</a></li>
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
