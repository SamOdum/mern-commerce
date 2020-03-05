import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import "regenerator-runtime/runtime";

if(process.env.NODE_ENV != 'production'){
  dotenv.config({ path: path.resolve(__dirname, '.env') });
}

export const jwt_secret = process.env.JWT_SECRET || 'unsafe_jwt_secret';
export const mongoURL = process.env.MONGODB_URI || 'mongodb://localhost/base-mern'
export const connectDB = async () => {
  try {
    await mongoose.connect(
      mongoURL,
      { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false },
      () => console.log("MongoDB is connected...")
    );
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
}

export default connectDB;