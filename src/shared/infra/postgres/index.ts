/* eslint-disable */
import pg from "pg";

async function createConnection() {
    if (global.connection) return global.connection.connect();

    const { Pool } = pg;

    const pool = await new Pool({
        connectionString: "postgres://postgres:docker@127.0.0.1:5432/core",
    });

    const client = await pool.connect();

    console.log("Criou pool de conexões no PostgreSQL!");

    const res = await client.query("SELECT NOW()");

    console.log(res.rows[0]);

    client.release();

    // guardando para usar sempre o mesmo

    global.connection = pool;

    return pool.connect();
}

export { createConnection };
