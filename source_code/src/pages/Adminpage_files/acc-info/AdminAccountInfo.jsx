import "../Adminpage.css";

const AdminAccountInfo = () => {
  return (
    <>
    <main className="main-content-admin-dashboard">
      <header className="header-admin-dashboard">
        <h1>
          <span className="header-main-title-admin-dashboard">
            {" "}
            Account Information{" "}
          </span>{" "}
          <span className="header-main-secondary-admin-dashboard">
            / Trainees
          </span>{" "}
        </h1>
      </header>
    </main>

    <div className="table-content-admin-dashboard">
        <div className="search-bar-admin-dashboard">
            <div className="search-container-admin-dashboard">
                <input type="text" placeholder="Search" id="search-input-admin-dashboard" />
                <button type="submit" id="submit-admin-dashboard">
                    <img className="search-img-admin-dashboard" src="./assets/magnifying-glass.png"></img>
                </button>
            </div>
        </div>

        <div className="tabs">
          <button className="tab">
            </button>  
        </div>    
    </div>    
    </>


    
  );
};

export default AdminAccountInfo;
