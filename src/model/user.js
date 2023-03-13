import mongoose from "mongoose";
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    minLength: 6
  },
  email: {
    type:String,
    required:true,
    unique:true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// define the compare password function (this help to compare the harshed password and the entered password)
userSchema.methods.comparePassword = async function (password) {
  const match = await bcrypt.compare(password, this.password);
  return match
}


const User = mongoose.model("User", userSchema)

export default User