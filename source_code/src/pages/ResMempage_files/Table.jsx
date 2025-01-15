import React, { useState } from "react";
import "./Table.css"
import SearchBar from "./SearchBar.jsx";

const dataMap = {
  activeMem: [
    { name: "John Doe", email: "jdoe@up.edu.ph", batch: 2023, orgbatch: "NA", additionalInfo: "" },
    { name: "Ada Lovelace", email: "alovelace@up.edu.ph", batch: 1999, orgbatch: "NA", additionalInfo: "" },
    { name: "George Bool", email: "gboole@up.edu.ph", batch: 2022, orgbatch: "NA", additionalInfo: "" },
    { name: "Bill Gates", email: "bgates@up.edu.ph", batch: 2010, orgbatch: "NA", additionalInfo: "" },
  ],
  inactiveMem: [
    { name: "John Doe", email: "jdoe@up.edu.ph", batch: 2023, orgbatch: "System7", additionalInfo: "" },
    { name: "Ada Lovelace", email: "alovelace@up.edu.ph", batch: 1999, orgbatch: "nightMode", additionalInfo: "" },
    { name: "George Bool", email: "gboole@up.edu.ph", batch: 2022, orgbatch: "Reboot", additionalInfo: "" },
    { name: "Bill Gates", email: "bgates@up.edu.ph", batch: 2010, orgbatch: "Batch from Home", additionalInfo: "" },
  ],
  alumni: [
    { name: "John Doe", email: "jdoe@up.edu.ph", batch: 2023, orgbatch: "Charter", additionalInfo: "" },
    { name: "Ada Lovelace", email: "alovelace@up.edu.ph", batch: 1999, orgbatch: "nightMode", additionalInfo: "" },
    { name: "George Bool", email: "gboole@up.edu.ph", batch: 2022, orgbatch: "Reboot", additionalInfo: "" },
    { name: "Bill Gates", email: "bgates@up.edu.ph", batch: 2010, orgbatch: "Batch from Home", additionalInfo: "" },
  ],
};
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
function Table() {
  const [type, setType] = useState("activeMem");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = dataMap[type].filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <div className="resmem-table-content">
    <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
    <div className="resmem-table-textfields">
      <div className="resmem-tabs">
        {Object.keys(dataMap).map((tab) => (
          <button
            key={tab}
            className={`resmem-tab ${type === tab ? "active" : ""}`}
            onClick={() => setType(tab)}
          >
            <p>{capitalize(tab.replace("Mem", "").replace("alumni", "Alumni"))}</p> 
          </button>
        ))}
      </div>

      <table className="resmem-account-table" id="account-table-id">
        <thead>
          <tr>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>BATCH</th>
            <th>ORG BATCH</th>
            <th> </th>
          </tr>
        </thead>
        <tbody id="table-values">
          {filteredData.map((row, index) => (
            <tr key={index}>
              <td>
                <div className="table-align-picture">
                  <div className="circle"></div>
                  {row.name}
                </div>
              </td>
              <td>{row.email}</td>
              <td>{row.batch}</td>
              <td>{row.orgbatch}</td>
              <td>{row.additionalInfo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </>
  );
}

export default Table;
