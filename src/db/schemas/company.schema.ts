import mongoose, { Schema } from "mongoose";

const companySchema = new Schema({
  NIT: String,
  address: String,
  phone: String,
  name: String,
  articles: [Object]
})

export const Company = mongoose.model('companies', companySchema) 
