import React, { useState, useEffect } from "react";
import "./MainContent.css";
import searchIcon from "./assets/magnifying-glass.png";

const trainees = [
  { name: "John Doe", email: "jdoe@up.edu.ph", batch: 2023, mentor: "NA", additionalInfo: "⋮" },
  { name: "Ada Lovelace", email: "alovelace@up.edu.ph", batch: 1999, mentor: "NA", additionalInfo: "⋮" },
  { name: "George Bool", email: "gboole@up.edu.ph", batch: 2022, mentor: "NA", additionalInfo: "⋮" },
  { name: "Bill Gates", email: "bgates@up.edu.ph", batch: 2010, mentor: "NA", additionalInfo: "⋮" },
];

const members = [
  { name: "John Doe", email: "jdoe@up.edu.ph", batch: 2023, orgbatch: "System7", additionalInfo: "⋮" },
  { name: "Ada Lovelace", email: "alovelace@up.edu.ph", batch: 1999, orgbatch: "nightMode", additionalInfo: "⋮" },
  { name: "George Bool", email: "gboole@up.edu.ph", batch: 2022, orgbatch: "Reboot", additionalInfo: "⋮" },
  { name: "Bill Gates", email: "bgates@up.edu.ph", batch: 2010, orgbatch: "Batch from Home", additionalInfo: "⋮" },
];

const MainContent = () => {
  const [activeTab, setActiveTab] = useState("trainees");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(trainees);
  const [popupData, setPopupData] = useState(null);

  useEffect(() => {
    const data = activeTab === "trainees" ? trainees : members;
    const keys = Object.keys(data[0]);
    const results = data.filter((item) =>
      keys.some((key) => item[key]?.toString().toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredData(results);
  }, [activeTab, searchTerm]);

  const handleEditUser = (user) => {
    alert(`Edit User: ${user.name}`);
  };

  const handleDeleteUser = (user) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete ${user.name}?`);
    if (confirmDelete) {
      setFilteredData((prevData) => prevData.filter((u) => u !== user));
    }
  };

  const renderHeaders = () => {
    if (activeTab === "trainees") {
      return ["NAME", "EMAIL", "BATCH", "MENTOR", ""];
    }
    return ["NAME", "EMAIL", "BATCH", "ORG BATCH", ""];
  };

  const renderPopup = () => {
    if (!popupData) return null;

    const { user, position } = popupData;

    return (
      <div
        className="popup-menu"
        style={{
          position: "absolute",
          top: position.y,
          left: position.x,
        }}
        onMouseLeave={() => setPopupData(null)}
      >
        <button
          className="edit-button"
          onClick={() => {
            handleEditUser(user);
            setPopupData(null);
          }}
        >
          Edit User
        </button>
        <button
          className="delete-button"
          onClick={() => {
            handleDeleteUser(user);
            setPopupData(null);
          }}
        >
          Delete User
        </button>
      </div>
    );
  };

  return (
    <main className="main-content">
      <header className="header">
        <h1>
          <span className="header-main-title">Account Information</span>
          <span className="header-main-secondary"> / {activeTab === "trainees" ? "Trainees" : "Members"}</span>
        </h1>
      </header>

      <div className="table-content">
        <div className="accinfo-search-bar">
          <div className="accinfo-search-container">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="button">
              <img className="accinfo-search-img" src={searchIcon} alt="Search" />
            </button>
          </div>
        </div>

        <div className="accinfo-tabs">
          <button
            className={`accinfo-tab ${activeTab === "trainees" ? "active" : ""}`}
            onClick={() => setActiveTab("trainees")}
          >
            <p>Trainees</p>
          </button>
          <button
            className={`accinfo-tab ${activeTab === "members" ? "active" : ""}`}
            onClick={() => setActiveTab("members")}
          >
            <p>Members</p>
          </button>
        </div>

        <div className="accinfo-table-textfields">
          <table className="accinfo-account-table">
            <thead>
              <tr>
                {renderHeaders().map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row, index) => (
                <tr key={index}>
                  <td>
                    <div className="accinfo-table-align-picture">
                      <div className="accinfo-circle"></div>
                      {row.name}
                    </div>
                  </td>
                  <td>{row.email}</td>
                  <td>{row.batch}</td>
                  <td>{activeTab === "trainees" ? row.mentor : row.orgbatch}</td>
                  <td>
                    <button
                      className="vert-ellipsis"
                      onClick={(e) => {
                        e.stopPropagation();
                        const rect = e.target.getBoundingClientRect();
                        setPopupData({
                          user: row,
                          position: {
                            x: rect.right + 10,
                            y: rect.top,
                          },
                        });
                      }}
                    >
                      {row.additionalInfo}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {renderPopup()}
      </div>
    </main>
  );
};

export default MainContent;
