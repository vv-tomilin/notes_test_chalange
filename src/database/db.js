import Dexie from 'dexie';

export const db = new Dexie('notes');

db.version(1).stores({
  notes: '++sort, id, title, content',
});

db.open();
