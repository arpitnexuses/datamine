import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, "helloarpitdeploy", {
    expiresIn: "30d",
  });
};

export default generateToken;
