import mysql from 'mysql2';

// project imports
import config from '@bonk-config/index'

export default mysql.createConnection({
  host: config.schema.host,
  user: config.schema.username,
  password: config.schema.password,
  database: config.schema.database,
});