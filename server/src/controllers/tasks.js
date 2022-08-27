import { connect } from "../database"

export const getTasks = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query('SELECT * FROM tasks')
    res.json(rows)
}

export const getTask = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM tasks WHERE id =?', [req.params.id])
    res.send(rows[0])
}

export const getTaskCount = async (req, res) => {
    const connection = await connect()
    const [rows] = await connection.query("SELECT COUNT(*) FROM tasks")
    res.json(rows[0]["COUNT(*)"])
}

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

export const deleteTask = (req, res) => {
    res.send('Hello, world')
}

export const updateTask = (req, res) => {
    res.send('Hello, world')
}