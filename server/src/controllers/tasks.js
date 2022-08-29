import { connect } from "../database"

// GET ALL TASKS
export const getTasks = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query('SELECT * FROM tasks')
    res.json(rows)
}


// GET SINGLE TASK
export const getTask = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM tasks WHERE id =?', [req.params.id])
    res.send(rows[0])
}


// GET COUNT
export const getTaskCount = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query("SELECT COUNT(*) FROM tasks")
    res.json(rows[0]["COUNT(*)"])
}


// ADD NEW TASK
export const saveTask = async (req, res) => {
    const connection = await connect()
    const [results] = await connection.query("INSERT INTO tasks(title, description) VALUES (?,?)", [
        req.body.title,
        req.body.description
    ])
    res.json({
        id: results.insertId,
        ...req.body
    })
}


// DELETE TASK
export const deleteTask = async (req, res) => {
    const connection = await connect()
    await connection.query("DELETE FROM tasks WHERE id =?", [
        req.params.id,
    ]);
    res.sendStatus(204)
}


// UPDATE TASK
export const updateTask = async (req, res) => {
    const connection = await connect()
    await connection.query('UPDATE tasks SET ? WHERE id = ?', [
        req.body,
        req.params.id
    ])
    res.sendStatus(204)
}