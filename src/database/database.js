/* eslint-disable import/no-mutable-exports */
import pg from 'pg';

const { Pool } = pg;
let connection;
let databaseConfig;

if (process.env.process.env.NODE_ENV === 'test') {
  connection = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT, 10),
    database: process.env.DB_DATABASE,
  });
} else {
  databaseConfig = {
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  };
  connection = new Pool(databaseConfig);
}

export default connection;
