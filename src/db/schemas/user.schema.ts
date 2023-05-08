import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  email: String,
  password: String,
  name: String,
  role: String
})

export const User = mongoose.model('users', userSchema) 
