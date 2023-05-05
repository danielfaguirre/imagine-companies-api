import { User } from "../../db/schemas/user.schema"
import bcrypt from 'bcrypt';
import UserModel from "../models/User";

const loginUser = async (email: string, password: string) => {
  try {
    const userResponse = await User.findOne({ email })
    if (userResponse && userResponse.password) {
      const isLogin = await bcrypt.compare(password, userResponse.password)
      if (isLogin) {
        return userResponse
      } else {
        return null
      }
    }
  } catch (error) {
    return null
  }
}

const signupUser = async (user: UserModel) => {
  const encryptedPassword = await bcrypt.hash(user.password, 10)

  try {
    const userResponse = await User.create({ ...user, password: encryptedPassword })
    return userResponse
  } catch (error) {
    return null
  }
}

const loginService = {
  loginUser,
  signupUser
}

export default loginService
