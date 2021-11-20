import express from 'express';
import cors from 'cors';
import signUp from './controllers/signUp.js';
import signIn from './controllers/signIn.js';
import { postPlan, getPlan } from './controllers/plans.js';
import postDelivery from './controllers/delivery.js';
import auth from './middlewares/auth.js';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/sign-up', signUp);
app.post('/sign-in', signIn);
app.post('/plans', auth, postPlan);
app.get('/plans', auth, getPlan);
app.post('/delivery', auth, postDelivery);

export default app;
