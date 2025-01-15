import React, { useState } from "react";
import "./AccInfo.css";
import SideBar from "./SideBar.jsx";
import MainContent from "./MainContent.jsx";
function AccInfo(){

    return(
        <div className="body">
            <div className="container">
            <SideBar/>
            <MainContent/>
             </div>
        </div>
        

    );
}
export default AccInfo;