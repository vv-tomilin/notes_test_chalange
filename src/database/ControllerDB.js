import { db } from './db';

export default class ControllerDB {
  constructor() {}

  getAllNotesFromDB() {
    return db.notes.toArray();
  }

  addNewNoteToDB(params) {
    db.notes.add(params);
  }

  updateNoteToDB(index, params) {
    db.notes.update(index, params);
  }

  removeFromDB(key) {
    db.notes.delete(key);
  }
}
