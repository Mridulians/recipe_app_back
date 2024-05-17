import { User } from "../Models/UserModels.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) return res.json({ message: "User Already Exist" });

    let hashPass = await bcrypt.hash(password, 10);

    user = await User.create({ name, email, password: hashPass });

    res.json({ message: "User Registered Successfully", user });
  } catch (err) {
    res.json(err.message);
  }

  console.log(req.body);
};





export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) return res.json({ message: "User Not Exist" });

    let validPass = await bcrypt.compare(password, user.password);

    if (!validPass) return res.json({ message: "Invalid Credentials" });

    const token = jwt.sign({userId:user._id} , '@#$%^&*%(){}{}$@#' , {
      expiresIn:'24h',
    })

    res.json({ message: `Welcome ${user.name}` , token });
  } 
  
  catch (err) {
    res.josn({ message: err.message });
  }
};




export const profile = async (req , res) =>{

  res.json({user : req.user});
}
