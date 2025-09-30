import mongoose from 'mongoose';
import app from './index.js';
import dotenv from 'dotenv';
dotenv.config();

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.DATABASE_URL as string);

  app.listen(process.env, () => {
    console.log(`This server is Running and port is : ${process.env.PORT}`);
  });
}
