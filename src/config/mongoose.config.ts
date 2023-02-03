import mongoose from 'mongoose';
import { Config } from './config';

export function connectDataBase(): void {
	mongoose.set('strictQuery', false);
	mongoose.set('autoIndex', true);
	mongoose
		.connect(Config.mongoUrl)
		.then(() => {
			console.log('Connected to Mongoose');
		})
		.catch((err) => {
			console.log('Failed to connect to Mongoose', err);
		});
}
