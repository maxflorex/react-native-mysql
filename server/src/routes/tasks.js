import { Router } from 'express'
import { deleteTask, getTask, getTaskCount, getTasks, saveTask, updateTask } from '../controllers/tasks'

// USE ROUTER TO DEFINE ROUTES
const router = Router()

/**
 * @swagger
 * tags:
 * name:Tasks
 * description: Tasks endpoint
 */

/**
 * @swagger
 * /tasks:
 * get:
 *   summary: Get all tasks
 */
router.get('/tasks', getTasks)

/**
 * @swagger
 * /tasks:
 * get:
 *   summary: Get total tasks counter
 */
router.get('/tasks/count', getTaskCount)

/**
 * @swagger
 * /tasks:
 * get:
 *   summary: Get task by id
 */
router.get('/tasks/:id', getTask)

/**
 * @swagger
 * /tasks:
 * post:
 *   summary: Save a new task
 */
router.post('/tasks', saveTask)

/**
 * @swagger
 * /tasks:
 * delete:
 *   summary: Delete a task
 */
router.delete('/tasks/:id', deleteTask)

/**
 * @swagger
 * /tasks:
 * put:
 *   summary: Update a task
 */
router.put('/tasks/:id', updateTask)

export default router