import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { router as authRouter } from './routes/auth.js';
import { router as paymentsRouter } from './routes/payments.js';
import { router as beneficiariesRouter } from './routes/beneficiaries.js';
import { router as usersRouter } from './routes/users.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRouter);
app.use('/api/payments', paymentsRouter);
app.use('/api/beneficiaries', beneficiariesRouter);
app.use('/api/users', usersRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});