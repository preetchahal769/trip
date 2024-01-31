//  * Sign up endpoint.
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import brcypt from "bcryptjs";
import userAuth from "../models/userAuthSchema.js";
// loading data from .env

dotenv.config();

// secretKey for json web token from .env

const secretKey = process.env.TOKEN_KEY;
const SESSION_ID = "access_token"; // naming access_token
/**
 * Sign up a new user.
 */
export const signup = async (req, res) => {
  try {
    const { name, userName, address, phoneNo, email, password } = req.body;

    if (!name.trim()) {
      return res.status(422).json({ message: "Name is required" });
    }

    const existUser = await userAuth.findOne({ userName });
    if (!userName.trim() || existUser) {
      return res.status(422).json({ message: "Invalid username" });
    }

    if (!address.trim()) {
      return res.status(422).json({ message: "Address is required" });
    }

    if (!phoneNo.trim()) {
      return res.status(422).json({ message: "PhoneNo is required" });
    }

    if (!email.trim()) {
      return res.status(422).json({ message: "Email is required" });
    }

    const emailExist = await userAuth.findOne({ email });
    if (emailExist) {
      return res.status(422).json({ message: "Email already exists" });
    }

    if (!password.trim()) {
      return res.status(422).json({ message: "Password is required" });
    }

    const salt = brcypt.genSaltSync(5);
    const hashedPassword = brcypt.hashSync(password, salt);

    const newUser = new userAuth({
      name,
      userName,
      address,
      phoneNo,
      email,
      password: hashedPassword,
      
    });

    await newUser.save();

    res.status(200).json({ message: "Signup successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
/**
 * Sign in an existing user.
 
 */
export const signin = async (req, res) => {
  const { userName, password } = req.body;

  try {
    console.log("Sign in endpoint called");
    if (userName.trim() === "") {
      return res.status(422).json({ message: "Username is required" });
      console.log("Username is required");
    }
    const chekUser = await userAuth.findOne({ userName });
    if (!chekUser) {
      console.log("Invalid login information");
      return res.status(422).json({ message: "invalid login information" });
    }
    console.log(chekUser.password);
    if (password.trim() === "") {
      return res.status(422).json({ message: "Password is required" });
    }
    const hashedPassword = chekUser.password; // getting stored hash password
    const result = await brcypt.compare(password, hashedPassword);
    if (!result) {
      console.log("Invalid login information");
      return res.status(422).json({ message: "invalid login information" });
    }
    const user = {
      id: chekUser._id,
      name: chekUser.name,
      username: chekUser.userName,
      email: chekUser.email,
      address: chekUser.address,
      phoneNo: chekUser.phoneNo,
      balance: chekUser.balance,
    };
    const token = jwt.sign(user, secretKey, {
      expiresIn: "1d",
    });
    if (!token) {
      console.log("Invalid login information");
      return res.status(422).json({ message: "invalid login information" });
    }
    try {
      console.log("token generated");
      console.log(token);
      const cookieOptions = {
       
        expires: new Date(Date.now() + 90000),
        
        
        // secure: true, // set this true only when using https
      };
     
      res
        .cookie(SESSION_ID, token, cookieOptions)
        .status(200)
        .json("Token Generated");
    } catch (error) {
      console.log(`cookie error ${error}`);
    }
  } catch (error) {
    console.log(`error: ${error}`);
  }
  // TODO: Implement sign in logic
};

export const verify = async (req, res) => {
  console.log("cookies", req.cookies.access_token);
  try {
    jwt.verify(req.cookies.access_token, secretKey , (err, user) => {
      if (err) {
        return res.status(403).json({message: "Login unauthorized"});
      }
      return res.status(200).json(user);
    });
  } catch (error) {
    
  }
  
};
