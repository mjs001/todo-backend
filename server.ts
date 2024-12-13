import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

import todoRoutes from './src/routes/todoRoutes';
app.use('/tasks', todoRoutes);

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
