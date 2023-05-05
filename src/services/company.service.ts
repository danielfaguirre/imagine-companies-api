import { Company } from "../../db/schemas/company.schema"
import CompanyModel from "../models/Company"

const getCompanies = async () => {
  try {
    const allCompanies = await Company.find({})
    return allCompanies
  } catch (error) {
    return null
  }
}

const addCompany = async (company: CompanyModel) => {
  try {
    const companyResponse = await Company.create(company)
    return companyResponse
  } catch (error) {
    return null
  }
}

const deleteCompany = async (companyNIT: string) => {
  try {
    const company = await Company.findOneAndDelete({ NIT: companyNIT })
    return company
  } catch (error) {
    return null
  }
}

const updateCompany = async (companyNIT: string, company: CompanyModel) => {
  try {
    const companyResponse = await Company.updateOne({ NIT: companyNIT }, company)
    return companyResponse
  } catch (error) {
    return null
  }
}

const companyService = {
  getCompanies,
  addCompany,
  updateCompany,
  deleteCompany
}

export default companyService
