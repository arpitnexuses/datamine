import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";

const isadmin = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.userid);
  const role = await role.find({_id: {$in: user.roles}});

  for (let i=0; i< role.length; i++) {
    if (role[i].name === "admin"){
      next();
      console.log(role[i].name);
      return; 
    }
}
return res.status(403).json({message : "Require admin permission"})
} 
)



const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      //decodes token id
      const decoded = jwt.verify(token, "helloarpitdeploy");

      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

const protecto =  (req, res, next) => {
  if (req.user.role === "user"){
    res.status(401);
    new Error("Not authorized");
      console.log(req.user.role)}
     else {
      next();
    }
  }


export { isadmin, protect, protecto}