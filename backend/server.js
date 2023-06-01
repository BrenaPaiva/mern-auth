import express from "express";
import dotenv from "dotenv";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
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
app.get('/', (req, res) => res.send(`Servidor iniciado`));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`iniciando o servidor na porta ${port}`))