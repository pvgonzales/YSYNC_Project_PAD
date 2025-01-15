import { useEffect, useState } from "react";
import api from "../../api/axios.js";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); 

    // clear error message when user is typing a new field value
    useEffect(() => {
        setErrorMessage('')
    }, [email])

    // Form validation functions: 
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    }

    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    }

    const handleMiddleNameChange = (event) => {
        setMiddleName(event.target.value);
    }

    // Functions in handling up mail:
    const isValidEmail = (email) => {
        const upEmailRegex = /^[a-zA-Z0-9._%+-]+@up\.edu\.ph$/;
        return upEmailRegex.test(email);
    }

    const checkValidCredentials = () => {
        if (!isValidEmail(email)) {
            return "Please enter a valid @up.edu.ph email address.";
        }
        return null;
    }

    // Handle submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        const error = checkValidCredentials();
        if (error) {
            setErrorMessage(error); 
            return;
        }
        setErrorMessage("");
        const user = {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
            middleName: middleName
        }

        try {
            const response = await api.post("/auth/register", user);
            if (response) {
                alert("Registration successful!");
                return await response.data;
            }
        } catch (error) {
            if (error.response) {
                console.log("Error response status: ", error.response.status);
                if (error.response.status === 400) {
                    setErrorMessage("User already exists.");
                } else if (error.response.status === 500) {
                    setErrorMessage("An error has occurred while registering.");
                }
            }
            else{
                alert("Failed to respond to the server.");
            }
        }
    }

    return (
        <>
            <form className="register-main-content" onSubmit={handleSubmit}>
                <label>First Name:
                    <input type="text" name="firstName" onChange={handleFirstNameChange} required/>
                </label>
                <br />
                <label>Middle Name:
                    <input type="text" name="middleName" onChange={handleMiddleNameChange} />
                </label>
                <br />
                <label>Last Name:
                    <input type="text" name="lastName" onChange={handleLastNameChange} required/>
                </label>
                <br />
                <label>Email:
                    <input type="email" name="email" onChange={handleEmailChange} required/>
                </label>
                <br/>
                <label>Password:
                    <input type="password" name="password" onChange={handlePasswordChange} required/>
                </label>
                <br />
                <button type="submit">Register</button>
                <br/>
                {errorMessage && 
                <>
                    <span className="error">{errorMessage}</span>
                    <br/>
                </>
                }
            </form>
        </>
    )
}