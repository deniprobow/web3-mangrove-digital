// lib/mysql.js
import mysql from 'mysql2';

// Create a MySQL connection pool (you can reuse the connection)
const pool = mysql.createPool({
  host: process.env.NEXT_PUBLIC_DB_HOST,       // Database host
  user: process.env.NEXT_PUBLIC_DB_USER,       // Database username
  password: process.env.NEXT_PUBLIC_DB_PASSWORD,  // Database password
  database: process.env.NEXT_PUBLIC_DB_NAME    // Database name
});

export default pool.promise();  // Use promise-based API
