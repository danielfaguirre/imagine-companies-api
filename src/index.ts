import express from 'express';
import cors from 'cors';
import companyController from './controllers/company.controller';
import userController from './controllers/user.controller';
import { dbConnect } from './db/mongoConnection';
import dummyController from './controllers/dummy.controller';
require('dotenv').config();

const SERVER_PORT = process.env.PORT || 8000
const app = express();

app.use(cors());
app.use(express.json());

dbConnect()

app.use('/api', companyController);
app.use('/api', userController);
app.use('/api', dummyController);


app.listen(SERVER_PORT, () =>
  console.log(`Imagine Companies app listening on port ${SERVER_PORT}!`)
);
