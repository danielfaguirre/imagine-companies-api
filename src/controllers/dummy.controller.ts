import express from "express"

const dummyController = express.Router()
const endpoint = "/dummy"


dummyController.get(endpoint, async (_, res) => {
  res.status(200).json({
    sayHello: "Hello"
  })
})

export default dummyController
