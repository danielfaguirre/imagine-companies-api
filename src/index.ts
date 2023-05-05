import express from 'express';
import cors from 'cors';
import companyController from './controllers/company.controller';
import { dbConnect } from '../db/mongoConnection';
import userController from './controllers/user.controller';


const SERVER_PORT = 3001
const app = express();
app.use(cors());
app.use(express.json());

dbConnect()

app.use('/api', companyController);
app.use('/api', userController);


app.listen(SERVER_PORT, () =>
  console.log(`Imagine Companies app listening on port 3001!`)
);
