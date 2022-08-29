import express from 'express'
import tasksRoutes from './routes/tasks' 
import cors from 'cors'
import morgan from 'morgan'
import { options } from './swaggerOptions'

const specs = swaggerJSDoc(options)

import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'

const app = express()


// ALLOWS BACKEND TO CONNECT TO APPLICATION
app.use(cors())


// MORGAN DISPLAYS INFORMATION IN THE CONSOLE
app.use(morgan("dev"))


// INIT EXPRESS
app.use(express.json())


// INIT ROUTES
app.use(tasksRoutes)


// CREATE SWAGGER ROUTE AND PASS OPTIONS
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs))


export default app