import mongoose from 'mongoose';
require('dotenv').config();

const dbName = process.env.DB_NAME
const userName = process.env.DB_USER_NAME
const password = process.env.DB_PASSWORD

console.log(dbName)

export const dbConnect = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${userName}:${password}@cluster0.i7qppiv.mongodb.net/${dbName}?retryWrites=true&w=majority`)
    console.log("Connected to MongoDB")
  } catch (error) {
    console.error(error)
  }
}
