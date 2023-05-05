import express from "express"
import companyService from "../services/company.service"
import CompanyModel from "../models/Company"

const companyController = express.Router()
const endpoint = "/company"

companyController.get(endpoint, async (_, res) => {
  const companies = await companyService.getCompanies()
  res.status(200).json(companies)
})

companyController.post(endpoint, async (req, res) => {
  const companyResponse = await companyService.addCompany(req.body as CompanyModel)
  res.status(200).json(companyResponse)
})

companyController.patch(`${endpoint}/:companyId`, async (req, res) => {
  const companyResponse = await companyService.updateCompany(req.params.companyId, req.body)
  res.status(201).json(companyResponse)
})

companyController.delete(`${endpoint}/:companyId`, async (req, res) => {
  const companyResponse = await companyService.deleteCompany(req.params.companyId)
  res.status(200).json(companyResponse)
})

export default companyController
