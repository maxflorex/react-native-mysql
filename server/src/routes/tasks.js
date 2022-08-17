import { Router } from 'express'
import { deleteTask, getTask, getTaskCount, getTasks, saveTask, updateTask } from '../controllers/tasks'

// USE ROUTER TO DEFINE ROUTES
const router = Router()

// DEFINE PATH & EXECUTE FUNCTION
router.get('/tasks', getTasks)

router.get('/tasks/count', getTaskCount)

router.get('/tasks/:id', getTask)

router.post('/tasks', saveTask)

router.delete('/tasks/:id', deleteTask)

router.put('/tasks/:id', updateTask)

export default router