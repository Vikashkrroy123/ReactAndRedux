import mysql from "mysql2/promise";

// mysql.createConnection()

export const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'0valEdge!',
    database:'context_db',
});

try {
    const connection = await db.getConnection();
    console.log(connection);
    connection.release();
    console.log('Connection released');
} catch (error) {
    console.log('Connection failed');
    console.log(error);
}