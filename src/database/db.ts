import { SQLiteDatabase, Database } from 'sqlite-async';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dbFile = __dirname + '/database.sqlite';

async function createDatabase(db: SQLiteDatabase): Promise<SQLiteDatabase> {
  // Banco em memória
  // const db = await Database.open(':memory:');

  await db.exec(`
    CREATE TABLE IF NOT EXISTS orphanages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      lat TEXT,
      lng TEXT, 
      name TEXT, 
      about TEXT,
      whatsapp TEXT,
      images TEXT,
      instructions TEXT,
      opening_hours TEXT,
      open_on_weekends TEXT
    );
  `);

  return db;
}

export default Database.open(dbFile).then(createDatabase);

/*
  DOC DB SQLite

  // Consultar dados na tabela
  const selectedOrphanages = await db.all('SELECT * FROM orphanages');

  // Consultar apenas um dado na tabela
  const selectOrphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')

  // Deletar um dado na tabela
  const deleteElementTable = await db.run('DELETE FROM orphanages WHERE id = "4"')

  // Deletar todos os dados da tabela 
  const deleteTable = await db.run('DELETE FROM orphanages')
*/
