import User from "../models/userSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
// sample:
// import ResidentMember from "../models/residentMemberSchema.js";
// import Trainee from "../models/traineeSchema.js";
const userSignIn = async (req, res) => {
    try{
        console.log("This is the request body", req.body);
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        // check if user exists in the database
        if (!user) {
            return res.status(401).json({ error: "Invalid credentials."});
        }

        // check if password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: "Invalid credentials."});
        }   

        // create and assign the jwt
        const accessToken = jwt.sign({ id: user._id, userType: user.userType}, process.env.JWT_SECRET, {expiresIn: "1h"});

        res.status(200).json({ message: "Login successful", role: user.userType, accessToken: accessToken });
    } catch (error) {
        res.status(500).json({ error: "An error has occurred while signing in."});
    }
}

const userRegister = async (req, res) => {
    try{
        const { firstName, lastName, middleName, email, password } = req.body;
        console.log(req.body)
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "User already exists."});
        }
        
        // we set userType to trainee (TODO: this will be changed later on)
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ firstName, lastName, middleName, email, password: hashedPassword, userType: "trainee"});
        console.log("test", user)
        await user.save();

        // this part is for migrating a user to a trainee (which is the main purpose of the register)
            // const trainee = new Trainee({ userId: user._id,
            //     interests: ["AI", "Cybersecurity", "UI/UX", "Database"],
            //     univBatch: 2023
            //  });
            // await trainee.save();

        // const residentMember = new ResidentMember({ userId: user._id, traineeId: trainee._id, isMentor: true, orgBatch: 2024, department: "VL", status: "active", isMentor: true, whyYouShouldChooseMe: "I enjoy teaching.", whatToExpect: "Hands-on mentorship." });
        // await residentMember.save();
        res.status(201).json({ message: "User registered successfully."});
    } catch (error) {
        res.status(500).json({ error: "An error has occured while registering the user."});
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: "An error has occurred while retrieving users." });
    }
}

// const testFunction = async (req,res) => {
//     try {
//         const residentMembers = await ResidentMember.find({isMentor: true}).populate('userId').populate('traineeId');
//         residentMembers.forEach((resMem) => {
//             console.log(resMem.userId.lastName);
//         })
//         res.status(200).json({residentMembers});
//     } catch (error) {
//         res.status(500).json({ error: "An error has occurred while doing the supposed test funciton." });
//     }
// } 

export {
    userSignIn,
    userRegister,
    getAllUsers,
    // testFunction
}

