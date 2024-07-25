import mongoose from "mongoose";
import validator from "validator";

const schema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: [true, "Please enter ID"],
    },
    name: {
      type: String,
      required: [true, "Please enter name"],
    },
    email: {
      type: String,
      unique: [true, "Email already Exist"],
      required: [true, "Please enter email"],
      validate: validator.default.isEmail,
    },
    photo: {
      type: String,
      required: [true, "Please add Photo"],
    },

    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    gender: {
      type: String,
      required: [true, "Please enter gender"],
      enum: ["male", "female"],
    },
  },
  {
    timestamps: true,
  }
);

// schema.virtual("age").get(function () {
//   const today = new Date();
//   const dob = this.dob;
//   let age = today.getFullYear() - dob.getFullYear();
// });

export const User = mongoose.model("User", schema);
