import pg from 'pg';

const { Pool } = pg;

// const connection = new Pool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   port: parseInt(process.env.DB_PORT, 10),
//   database: process.env.DB_DATABASE,
// });

const databaseConfig = {
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
};

const connection = new Pool(databaseConfig);

export default connection;
