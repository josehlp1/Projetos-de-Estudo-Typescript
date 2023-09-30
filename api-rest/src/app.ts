require('dotenv').config();
import express from 'express'
import config from 'config'


const app = express()

// json middleware

app.use(express.json())

// import db 
import db from '../config/db'

//  Middleware
import morganMiddleware from './middleware/morganMiddleware';

app.use(morganMiddleware);

// routes
import router from './router'

app.use('/api/', router);

// Logger
import Logger from '../config/logger';


// app port
const port = config.get<number>("port")

app.listen(port, async () => {
   await db()
   Logger.info(`App rodando na porta ${port}`) 
})