import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        require: true,
        min: 3,
        max: 20,
    },
    email:{
        type: String,
        require: true,
        unique: true,
    },
    password:{
        type: String,
        require: true,
    },
    img:{
        type: String,
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    isActive:{
        type: Boolean,
        default: true
    },
    phone:{
        type: String,
    },
    address:{
        type: String,
    },
},
{timestamps: true}
);
const mildsSchema = new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
        unique: true,
      },
      desc: {
        type: String,
        required: true,
      },
      lat: {
        type: Number,
        required: true,
      },
      long: {
        type: Number,
        required: true,
      },
      img: {
        type: String,
      },
      color: {
        type: String,
      },
      size: {
        type: String,
      },
    },
    { timestamps: true }
  );

export const User = mongoose.models.User || mongoose.model("User", userSchema)
export const Milds = mongoose.models.Milds || mongoose.model("Milds", mildsSchema)
