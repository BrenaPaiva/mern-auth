import express from "express";
import dotenv from "dotenv";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

const port = process.env.PORT || 5000;

import useRoutes from './routes/useRoutes.js'

const app = express();

app.use('/api/users', useRoutes);
app.get('/', (req, res) => res.send(`Servidor iniciado`));

app.use(notFound);
app.use(errorHandler)

app.listen(port, () => console.log(`iniciando o servidor na porta ${port}`))