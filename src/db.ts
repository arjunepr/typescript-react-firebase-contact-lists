import * as Database from 'nedb';

const db = new Database({ filename: 'contacts' });
db.loadDatabase((err: Error) => { if(err){console.log(err); throw err;}});

export default db;