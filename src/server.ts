import express from 'express';
import routes from './routes';
import cors from 'cors';
import path from 'path';
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));