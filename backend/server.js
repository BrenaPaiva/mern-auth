import express from 'express';
import dotenv from 'dotenv';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";

dotenv.config();

const port = process.env.PORT || 5000;

import useRoutes from './routes/useRoutes.js'
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use('/api/users', useRoutes);
if (process.env.NODE_ENV === 'production') {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, '/frontend/dist')));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
  );
} else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
}

// app.get('/', (req, res) => res.send(`Servidor iniciado`));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`iniciando o servidor na porta ${port}`))