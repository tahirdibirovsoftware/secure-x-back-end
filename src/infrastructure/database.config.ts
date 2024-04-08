import { Pool } from 'pg'
import { DATABASE_USER, DATABASE_PASSWORD, DATABASE_NAME, DATABASE_PORT } from './env.config'


const pool = new Pool({
    user: DATABASE_USER,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
    port: parseInt(DATABASE_PORT)
})


export default pool