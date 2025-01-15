import React from "react";
import "./SearchBar.css";
import searchIcon from "./assets/magnifying-glass.png";

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
function SearchBar({ searchTerm, setSearchTerm, onSubmit }) {
  return (
    <div className="search-bar">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search"
          id="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update the searchTerm state
        />
        <button
          type="submit"
          id="submit"
          onClick={onSubmit} // Call the provided onSubmit handler
        >
          <img
            className="search-img"
            src={searchIcon}
            alt="Search"
          />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
