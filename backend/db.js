import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const dbUrl = process.env.MONGO_URI;

mongoose.connect(dbUrl, {
  
})
.then(() => console.log('Database connected successfully'))
.catch((err) => console.error('Database connection error:', err));
