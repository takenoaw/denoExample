import { Database } from 'https://deno.land/x/denodb/mod.ts';
const db = new Database('sqlite3', {
  filepath: './database.sqlite',
});

export default db;