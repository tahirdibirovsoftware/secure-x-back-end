CREATE DATABASE secure_x;
CREATE TABLE users(
    id UUID PRIMARY KEY NOT NULL,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL
);

CREATE TABLE notes(
    id UUID PRIMARY KEY NOT NULL,
    title VARCHAR(50),
    content TEXT,
    writtenAt DATE NOT NULL,
    updatedAt DATE,
    author UUID,
    FOREIGN KEY(author)
    REFERENCES users(id) 
);

