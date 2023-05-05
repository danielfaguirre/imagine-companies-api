import express from "express"
import loginService from "../services/user.service"
import UserModel from "../models/User"

const userController = express.Router()
const endpoint = "/user"

userController.post(`${endpoint}/login`, async (req, res) => {
  const { email, password } = req.body
  const userResponse = await loginService.loginUser(email, password)
  if (userResponse)
    res.status(200).json(userResponse)
  else
    res.status(400)
})

userController.post(`${endpoint}/register`, async (req, res) => {
  const userResponse = await loginService.signupUser(req.body as UserModel)
  res.status(200).json({ ...userResponse, password: undefined })
})

export default userController
