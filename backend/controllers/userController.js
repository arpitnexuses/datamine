import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

//@description     Auth the user
//@route           POST /api/users/login
//@access          Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      phone:user.phone,
      city:user.city,
      country:user.country,
      linkedin:user.linkedin,
      company:user.company,
      dob:user.dob,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

//@description     Register new user
//@route           POST /api/users/
//@access          Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic, role, city , country, linkedin, phone, company, dob} = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(404);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    pic,
    role,
    city,
    country,
    linkedin,
    phone,
    company,
    dob,


  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      pic: user.pic,
      phone: user.phone,
      city: user.city,
      country: user.country,
      linkedin: user.linkedin,
      company: user.company,
      dob: user.dob,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

// @desc    GET user profile
// @route   GET /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.pic = req.body.pic || user.pic;
    user.phone = req.body.phone || user.phone;
    user.city = req.body.city || user.city;
    user.country = req.body.country || user.country;
    user.company = req.body.company || user.company;
    user.dob = req.body.dob || user.dob;
    user.linkedin = req.body.linkedin || user.linkedin;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();
    if (updatedUser) {
      user.role === "partner"
    }
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      pic: updatedUser.pic,
      role: updatedUser.role,
      phone: updatedUser.phone,
      city: updatedUser.city,
      country: updatedUser.country,
      linkedin: updatedUser.linkedin,
      company: updatedUser.company,
      dob: updatedUser.dob,


      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});


const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find(req.params.id);
  res.json(users);
});


    
export { authUser, updateUserProfile, registerUser, getAllUsers };
