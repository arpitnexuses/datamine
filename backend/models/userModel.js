import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: "string",
      required: true,
      default: "onboard",
    },
    pic: {
      type: String,
      required: true,
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    linkedin:{
      type: String,
      required: false,
    },
    phone: {
      type: "string",
      required: false,
      default: ''
    },
    dob: {
      type: "string",
      required: false,
      default: ''
    },
    company: {
      type: "string",
      required: false,
      default: ''
    },
    city:{
      type: "string",
      required: false,
      default: ''
    },
    country:{
      type: "string",
      required: false,
      default: ''
    },
    linkedin:{
      type: "string",
      required: false,
      default: ''
    }
},
  {
    timestamps: true,
  }
  
);

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// will encrypt password everytime its saved
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

export default User;
