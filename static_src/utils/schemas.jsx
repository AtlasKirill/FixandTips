import { normalize, schema } from 'normalizr';

export const user = new schema.Entity('users');
export const category = new schema.Entity('categories');
export const request = new schema.Entity('requests');
export const news = new schema.Entity('news');