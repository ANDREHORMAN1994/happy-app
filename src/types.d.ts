declare module 'express-hbs/lib/hbs.js';

declare module 'sqlite-async' {
  import { Database as SQLite3Database } from 'sqlite3';

  export interface SQLiteDatabase extends SQLite3Database, Array<any> {
    length: number;
  }

  export interface OrphanageInfos {
    id?: number;
    lat: string;
    lng: string;
    name: string;
    about: string;
    whatsapp: string;
    images: string | string[];
    firstImage?: string;
    instructions: string;
    opening_hours: string;
    open_on_weekends: string | boolean;
  }

  export const open: (filename: string) => Promise<SQLiteDatabase>;

  export const Database = {
    open,
  }

}
