import express from "express";
import bodyParser from 'body-parser';

import userRoutes from './routes/users.js'

const app = express()
const PORT = 5000;

app.use(bodyParser.json())

app.get('/', (req, res) => res.status(200).send('Hello world!'))

app.use('/users', userRoutes)

app.listen(PORT, () => console.log(`Server is running on port: http://localhost:${PORT}`))