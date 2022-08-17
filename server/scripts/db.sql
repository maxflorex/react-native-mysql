CREATE DATABASE IF NOT EXISTS tasksdb;

USE tasksdb;

CREATE TABLE IF NOT EXISTS tasks(
    id INT NOT NULL AUTO_INCREMENT,
    titles VARCHAR(100) NOT NULL,
    description TEXT;
    PRIMARY KEY (id)
)

INSERT INTO tasks (titles, description) VALUES (
    ('Task1', 'Some description')
    ('Task2', 'Some description2');
)