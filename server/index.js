import express from 'express';
import postRoutes from './routes/post.routes.js';
import { connectDB } from './db.js';
import { PORT } from './config.js';

const app = express();
connectDB();

app.use(postRoutes);

app.listen(PORT)
console.log('server running on port:', 3000);