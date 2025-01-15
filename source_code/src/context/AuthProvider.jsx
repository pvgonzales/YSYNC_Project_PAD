import { createContext, useContext, useState } from "react";

// create a context first for the authentication
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({});
    // console.log("AuthProvider rendered with state:", auth);
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthContext;
