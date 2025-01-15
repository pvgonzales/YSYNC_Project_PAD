import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthProvider.jsx";
// ProtectedRoute Component
const ProtectedRoute = ({ element, allowedRoles }) => {
    const { auth } = useContext(AuthContext);
    console.log(auth)
    if (!auth?.accessToken) {
        console.log("pumunta siya rito")
      // If no access token, redirect to login
      return <Navigate to="/login" replace />;
    }
  
    if (allowedRoles && !allowedRoles.includes(auth.role)) {
      // If user's role is not allowed, or the account is created in a weird way, redirect to "Not Authorized"
      return <Navigate to="/unauthorized" replace />;
    }
    
    sessionStorage.setItem("username", auth.email.replace("@up.edu.ph", "").trim());
    return element; // Render the component if authorized
  };

export default ProtectedRoute;